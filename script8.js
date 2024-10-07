// Função para inserir prazo de 15 dias em Homologar decisão e clicar em Salvar

function inserirPrazoESalvar() {
    // Verifica se a URL atual começa com o prefixo especificado
    if (urlAtual.endsWith("minutar"))  {
        // Verifica se a página contém um h1 com o conteúdo especificado
        var h1 = document.querySelector('h1.titulo-tarefa');
        
        if (h1 && h1.textContent.trim().includes('Elaborar decisão')) {
            // Insere o número 15 em todos os input type="text" da página
            var inputs = document.querySelectorAll('input[type="text"]');
            inputs.forEach(function(input) {
                input.value = '15';
            });

            // Seleciona o botão "Gravar" novo
            var botaoGravar = document.querySelector('button.mat-raised-button');
            if (botaoGravar) {
                console.log("Clicando no botão 'Gravar'...");
                botaoGravar.click();
            } else {
                console.log("Botão 'Gravar' não encontrado.");
            }

            // Função para adicionar botão no cabeçalho "Elaborar decisão"
            function adicionarBotao() {
                var cabecalhoCard = document.querySelector('div#responsavelprocesso');
                if (cabecalhoCard) {
                    var botao = document.createElement('button');
                    botao.textContent = 'Tabelas';
                    botao.addEventListener('click', function() {
                        // Redirecionar para a página "tabelas.html" ao clicar no botão
                        window.open('https://estevaofreixo.github.io/tabela/', '_blank');
                    });

                    // Estilizando o botão diretamente no JavaScript
                    botao.style.backgroundColor = '#087cac';
                    botao.style.border = 'none';
                    botao.style.color = 'white';
                    botao.style.padding = '8px 25px';
                    botao.style.marginTop = "0px";
                    botao.style.marginLeft = "60px";
                    botao.style.marginBottom = "2px";
                    botao.style.fontWeight = "bold";
                    botao.style.textAlign = 'center';
                    botao.style.textDecoration = 'none';
                    botao.style.display = 'inline-block';
                    botao.style.fontSize = '16px';
                    botao.style.cursor = 'pointer';
                    botao.style.borderRadius = '10px';
                    cabecalhoCard.appendChild(botao);
                }
            }
            setTimeout(adicionarBotao, 3000); 
        } else {
            console.log("A página não contém um h1 com o conteúdo especificado.");
        }
    } else {
        console.log("Você não está na URL correta para executar esta ação.");
    }
}

setTimeout(inserirPrazoESalvar, 3000);

