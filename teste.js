const { Builder, By } = require('selenium-webdriver');
const Excel = require('winax').Object;
const moment = require('moment');

(async function extrairDados() {
    // Configura o driver para o Firefox
    let driver = await new Builder().forBrowser('firefox').build();

    try {
        // Navega para a URL
        await driver.get('https://pje.trt1.jus.br/pjekz/processo/1244249/documento/208005224/conteudo');

        // Espera que o conteúdo seja carregado
        await driver.sleep(5000); // Aguardar tempo suficiente para carregar o conteúdo (ajuste conforme necessário)

        // Extrai o texto da página (depende da estrutura HTML da página)
        let texto = await driver.findElement(By.tagName('body')).getText();

        // Função para encontrar o maior número em uma linha (considerando formatação com vírgula e ponto)
        function encontrarMaiorNumero(linha) {
            const numeros = linha.match(/\d{1,3}(?:\.\d{3})*,\d{2}|\d{1,3}(?:\.\d{3})*/g);
            if (numeros) {
                const numerosConvertidos = numeros.map(num => parseFloat(num.replace(/\./g, '').replace(',', '.')));
                return Math.max(...numerosConvertidos);
            }
            return null;
        }

        // Função para encontrar o número posterior a um texto (com flexibilidade para texto intermediário)
        function encontrarNumeroPosterior(texto, padrao) {
            const regex = new RegExp(`${padrao}.*?(\\d{1,3}(?:\\.\\d{3})*,\\d{2})`, 's');
            const match = texto.match(regex);
            return match ? parseFloat(match[1].replace(/\./g, '').replace(',', '.')) : null;
        }

        // Função para encontrar o número anterior a um texto
        function encontrarNumeroAnterior(texto, padrao) {
            const regex = new RegExp(`(\\d{1,3}(?:\\.\\d{3})*,\\d{2})\\s*${padrao}`);
            const match = texto.match(regex);
            return match ? parseFloat(match[1].replace(/\./g, '').replace(',', '.')) : null;
        }

        // Função para encontrar a última data no formato dd/mm/aaaa antes do texto "Data Liquidação"
        function encontrarDataLiquidacao(texto) {
            const regex = /(\d{2}\/\d{2}\/\d{4})\s*Data Liquidação/g;
            let match, ultimaData = null;
            while (match = regex.exec(texto)) {
                ultimaData = match[1];
            }
            return ultimaData ? moment(ultimaData, 'DD/MM/YYYY').toDate() : null;
        }

        // Função para dividir o texto em duas partes: antes e depois de "CUSTAS JUDICIAIS DEVIDAS PELO RECLAMADO"
        function dividirTextoCustas(texto) {
            const partes = texto.split("CUSTAS JUDICIAIS DEVIDAS PELO RECLAMADO");
            return partes.length === 2 ? partes : [texto, null];
        }

        // Variáveis para armazenar os valores capturados
        let valorDataLiquidacao = null;
        let valorLiquidoReclamante = null;
        let valorDepositoFgts = null;
        let valorIrpfReclamante = null;
        let valorCustasJudiciais = null;
        let valorHonorariosPrimeira = null;
        let valorHonorariosSegunda = null;
        let valorHonorariosTerceira = null;
        let valorCPrimeira = null;
        let valorCSegunda = null;
        let valorDSegunda = null;

        let contadorHonorarios = 0;
        let contadorC = 0;
        let contadorD = 0;

        const [textoAntesCustas, textoDepoisCustas] = dividirTextoCustas(texto);

        // Processar texto antes de "CUSTAS"
        if (textoAntesCustas) {
            const linhasAntes = textoAntesCustas.split('\n');
            linhasAntes.forEach(linha => {
                if (linha.startsWith("HONORÁRIOS LÍQUIDOS PARA")) {
                    contadorHonorarios++;
                    const valorHonorarios = encontrarNumeroPosterior(linha, "HONORÁRIOS LÍQUIDOS PARA");
                    if (contadorHonorarios === 1) valorHonorariosPrimeira = valorHonorarios;
                    else if (contadorHonorarios === 2) valorHonorariosSegunda = valorHonorarios;
                }
            });
        }

        // Processar texto depois de "CUSTAS"
        if (textoDepoisCustas) {
            const linhasDepois = textoDepoisCustas.split('\n');
            linhasDepois.forEach(linha => {
                if (linha.startsWith("HONORÁRIOS LÍQUIDOS PARA")) {
                    valorHonorariosTerceira = encontrarNumeroPosterior(linha, "HONORÁRIOS LÍQUIDOS PARA");
                }
            });
        }

        // Procurar outras ocorrências normalmente
        valorDataLiquidacao = encontrarDataLiquidacao(texto);
        valorLiquidoReclamante = encontrarNumeroAnterior(texto, "Líquido Devido ao Reclamante");
        valorDepositoFgts = encontrarNumeroPosterior(texto, "DEPÓSITO FGTS");
        valorIrpfReclamante = encontrarNumeroPosterior(texto, "IRPF DEVIDO PELO RECLAMANTE");
        valorCustasJudiciais = encontrarNumeroPosterior(texto, "CUSTAS JUDICIAIS DEVIDAS PELO RECLAMADO");

        const linhas = texto.split('\n');
        linhas.forEach(linha => {
            if (linha.includes("C = A x B")) {
                contadorC++;
                const maiorNumero = encontrarMaiorNumero(linha);
                if (contadorC === 1 && maiorNumero) valorCPrimeira = maiorNumero;
                else if (contadorC === 2 && maiorNumero) valorCSegunda = maiorNumero;
            } else if (linha.includes("D = A x B")) {
                contadorD++;
                if (contadorD === 2) {
                    const maiorNumero = encontrarMaiorNumero(linha);
                    if (maiorNumero) valorDSegunda = maiorNumero;
                }
            }
        });

        // Manipulação do Excel via COM (winax)
        const excel = new Excel('Excel.Application');
        const workbook = excel.Workbooks.Open('C:\\path\\to\\CONVERSÃO EM TR.xlsm'); // Substitua pelo caminho correto
        const worksheet = workbook.Sheets(1);

        if (valorDataLiquidacao) {
            worksheet.Cells('C34').Value = moment(valorDataLiquidacao).format('DD/MM/YYYY');
            forcarCalculoCelula(worksheet, 'C34');
        }

        if (valorLiquidoReclamante) {
            worksheet.Cells('C13').Value = valorLiquidoReclamante;
            forcarCalculoCelula(worksheet, 'C13');
        }

        if (valorDepositoFgts) {
            worksheet.Cells('C20').Value = valorDepositoFgts;
            forcarCalculoCelula(worksheet, 'C20');
        }

        if (valorHonorariosPrimeira) {
            worksheet.Cells('C24').Value = valorHonorariosPrimeira;
            forcarCalculoCelula(worksheet, 'C24');
        }

        if (valorHonorariosSegunda) {
            worksheet.Cells('C21').Value = valorHonorariosSegunda;
            forcarCalculoCelula(worksheet, 'C21');
        }

        if (valorHonorariosTerceira) {
            worksheet.Cells('C23').Value = valorHonorariosTerceira;
            forcarCalculoCelula(worksheet, 'C23');
        }

        if (valorIrpfReclamante) {
            worksheet.Cells('C19').Value = valorIrpfReclamante;
            forcarCalculoCelula(worksheet, 'C19');
        }

        if (valorCustasJudiciais) {
            worksheet.Cells('C18').Value = valorCustasJudiciais;
            forcarCalculoCelula(worksheet, 'C18');
        }

        if (valorDSegunda) {
            worksheet.Cells('C14').Value = valorDSegunda;
            forcarCalculoCelula(worksheet, 'C14');
        }

        if (valorCPrimeira) {
            worksheet.Cells('C15').Value = valorCPrimeira;
            forcarCalculoCelula(worksheet, 'C15');
        }

        if (valorCSegunda) {
            worksheet.Cells('C16').Value = valorCSegunda;
            forcarCalculoCelula(worksheet, 'C16');
        }

        excel.Visible = true;

        console.log("Valores numéricos e datas inseridos corretamente nas células.");
    } catch (err) {
        console.error("Erro ao extrair dados da página:", err);
    } finally {
        await driver.quit();
    }
})();
