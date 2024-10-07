
// Insere os dados dos honorários no Pjecalc

setTimeout(function() {
    // Verifica se a URL começa com o prefixo desejado
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/honorarios.jsf?conversation")) {
        // Espera 3 segundos para garantir que a página esteja carregada completamente

        // Seleciona o primeiro input desejado
        var inputRadio1 = document.getElementById("formulario:tipoDeDevedor:1");
        if (inputRadio1) {
            // Define o primeiro input como selecionado
            inputRadio1.checked = true;

            // Seleciona o segundo input desejado
            var inputRadio2 = document.getElementById("formulario:tipoValor:1");
            if (inputRadio2) {
                // Define o segundo input como selecionado
                inputRadio2.checked = true;
            } else {
                console.error("Input 2 não encontrado.");
            }

            // Seleciona a opção desejada no select
            var selectElement = document.getElementById("formulario:baseParaApuracao");
            if (selectElement) {
                // Define a opção com o valor "BRUTO" como selecionada
                selectElement.value = "BRUTO";

                // Função para incluir o valor numérico no input
                function incluirValorNoInput() {
                    // Seleciona o elemento do input
                    var inputElement = document.getElementById('formulario:aliquota');
                    if (inputElement) {
                        // Define o valor do input como "10,00"
                        inputElement.value = '10,00';
                    } else {
                        console.log('Elemento do input não encontrado.');
                    }
                }

                // Chama a função para incluir o valor numérico no input
                incluirValorNoInput();

                // Seleciona a opção desejada no segundo select
                var selectCredores = document.getElementById("formulario:selecaoCredores");
                if (selectCredores) {
                    // Define a opção com o valor especificado como selecionada
                    selectCredores.selectedIndex = 1;

                    // Extrai o nome próprio e o CPF da opção selecionada
                    var optionText = selectCredores.options[selectCredores.selectedIndex].text;
                    var nomeProprio = optionText.split(" - ")[0];
                    var cpf = optionText.split(" - ")[1].split(":")[1].trim();

                    // Insere o nome próprio no input correspondente
                    document.getElementById("formulario:nomeCredor").value = nomeProprio;

                    // Insere o CPF no input correspondente
                    document.getElementById("formulario:numeroDocumentoFiscalCredor").value = cpf;
                } else {
                    console.error("Select de credores não encontrado.");
                }
            } else {
                console.error("Select não encontrado.");
            }            

        } else {
            console.error("Input 1 não encontrado.");
        }
    } else {
        console.log("URL não corresponde ao padrão esperado.");
    }
}, 2500);
