
// Faz download do processo na página de detalhes

setTimeout(function() {
    // Verifica se a URL termina com "detalhe"
    if (window.location.href.endsWith("detalhe")) {
        // Adiciona um listener para capturar o pressionamento da tecla
        document.addEventListener('keydown', function(event) {
            // Verifica se a tecla pressionada foi a barra de espaço (código 32 ou ' ')
            if ((event.code === 'Space' || event.key === ' ') && document.activeElement === document.body) {
                // Seleciona o elemento com o ID "maisPJe_bt_detalhes_downloadProcessoCompleto"
                var downloadLink = document.getElementById("maisPJe_bt_detalhes_downloadProcessoCompleto");
                
                // Verifica se o elemento foi encontrado antes de tentar clicar
                if (downloadLink) {
                    downloadLink.click(); // Simula o clique no link
                } else {
                    console.error("Elemento de download não encontrado.");
                }
            }
        });
    }
}, 3000); // Espera 2 segundos (2000 milissegundos) antes de executar
