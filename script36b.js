// Automação banex 2

// Função para verificar a URL e clicar no botão
function checkUrlAndClickButton() {
    // Verifica a URL e inicia a verificação contínua
    if (window.location.href.startsWith("https://banex.trt1.jus.br")) {
        // Cria um intervalo que verifica a presença do botão a cada 500ms
        const intervalId = setInterval(() => {
            // Seleciona todos os botões com a classe especificada
            const buttons = document.querySelectorAll('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary');
            
            // Itera sobre os botões encontrados
            buttons.forEach(button => {
                // Verifica se o texto do botão é "Execução Centralizada"
                if (button.textContent.trim() === "Execução Centralizada") {
                    // Clica no botão
                    button.click();
                    console.log("Botão 'Execução Centralizada' clicado.");

                    // Para o intervalo após encontrar e clicar no botão
                    clearInterval(intervalId);
                }
            });
        }, 500); // Intervalo de 500ms para verificar a presença do botão
    } else {
        console.log("URL não corresponde.");
    }
}

// Executa a função
checkUrlAndClickButton();
