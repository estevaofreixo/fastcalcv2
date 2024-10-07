// Gera clique na página de login do Pje

// Define a função que será executada após 1 segundo
function checkAndClick() {
    // Verifica se a URL da página começa com o prefixo especificado
    if (window.location.href.startsWith("https://pje.trt1.jus.br/primeirograu/login.seam")) {
        // Tenta encontrar o botão pelo ID
        var button = document.getElementById("loginAplicacaoButton");
        // Se o botão for encontrado, simula um clique
        if (button) {
            button.click();
        } else {
            console.log("Botão não encontrado.");
        }
    }
}

// Define o atraso de 1 segundo (2000 milissegundos) antes de executar a função
setTimeout(checkAndClick, 1000);
