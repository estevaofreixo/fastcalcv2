// Conclui assinatura na certidão "Certidão REEF"


var intervalID = setInterval(function() {
    // Verifica se o usuário está em uma URL que termina com "anexar"
    if (window.location.href.endsWith("anexar")) {
        // Obtém a div com a classe "area-conteudo"
        var divConteudo = document.querySelector('.area-conteudo');
        
        // Verifica se a div foi encontrada
        if (divConteudo) {
            // Procura dentro da div por parágrafos que contenham o texto desejado
            var paragrafos = divConteudo.querySelectorAll('p');
            var encontrado = false;
            paragrafos.forEach(function(paragrafo) {
                if (paragrafo.textContent.trim() === "Certifico que, nesta data, enviei à CAEX as informações necessárias relativas à participação do devedor no Regime Especial de Execução Forçada – REEF, conforme Ofício recebido.") {
                    encontrado = true;
                }
            });

            // Se encontrado for verdadeiro, clica no botão de assinar
            if (encontrado) {
                var botaoAssinar = document.querySelector('.mat-fab');
                if (botaoAssinar) {
                    botaoAssinar.click();
                } else {
                    console.error("Botão não encontrado!");
                }
            } else {
                console.log("O parágrafo não foi encontrado.");
            }
        } else {
            console.log("A div de conteúdo não foi encontrada.");
        }
    } else {
        console.log("O usuário não está em uma URL que termina com 'anexar'.");
    }
}, 2000);

// Adiciona um event listener para detectar a tecla "Esc"
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        // Interrompe o looping ao limpar o intervalo
        clearInterval(intervalID);
        console.log("Looping interrompido.");
    }
});
