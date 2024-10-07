
// Clica no botão para abrir o Pjecalc

// Verifica se a URL começa com o prefixo especificado
if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/logon.jsf")) {
    // Obtém uma referência para o botão de login
    var loginButton = document.getElementById("loginAplicacaoButton");
    
    // Verifica se o botão existe antes de tentar clicar nele
    if (loginButton) {
        // Simula um clique no botão
        loginButton.click();
    } else {
        console.error("O botão de login não foi encontrado.");
    }
}

  


  

