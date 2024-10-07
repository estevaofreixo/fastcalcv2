// Automatiza o clique nos botões do "Enviar para o PJe"

// Função para clicar no botão 1 apenas uma vez
function clicarBotao1() {
    // Procura o botão formulario:validar
    var botao1 = document.getElementById("formulario:validar");
    if (botao1) {
        // Clica no botão 1
        botao1.click();
        // Remove o manipulador de eventos do botão 1 após o primeiro clique
        botao1.removeEventListener("click", clicarBotao1);
    }
}

// Função para executar as instruções a cada 7 segundos
function executarInstrucoes() {
    // Espera 4 segundos e procura o próximo botão
    setTimeout(function() {
        var botao2 = document.getElementById("formulario:loginAplicacaoButton");
        if (botao2) {
            botao2.click();
            // Espera 0,1 segundo e procura o próximo botão
            setTimeout(function() {
                var botao3 = document.getElementById("popup_ok");
                if (botao3) {
                    botao3.click();  

                    // Espera 1 segundo e procura o próximo botão
                    setTimeout(function() {
                        var botao4 = document.querySelector('.sweet-alert.showSweetAlert.visible .confirm');
                        if (botao4) {
                            botao4.click();
                        }
                    }, 1000);
                }
            }, 100);
        }
    }, 2000);
}

// Verifica se o usuário está na URL desejada
if ((window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/validacao.jsf?conversation") || window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/pagamento/validacao-atualizacao.jsf?conversation")) && !window.location.href.endsWith("irTopoPagina")) {
    // Adiciona um manipulador de eventos para o botão 1
    document.addEventListener("DOMContentLoaded", function() {
        clicarBotao1();
    });
    
    // Executa as instruções pela primeira vez
    executarInstrucoes();

    // Define um loop para executar as instruções a cada 7 segundos
    setInterval(executarInstrucoes, 1000);
}




