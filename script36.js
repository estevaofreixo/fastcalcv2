// Automação banex 1

// Função para preencher os campos de login e clicar no botão
function preencherCamposElogar() {
    // Obtém os elementos pelos ids
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    var loginButton = document.getElementById('kc-login');

    // Verifica se os campos e o botão existem
    if (usernameField && passwordField && loginButton) {
        // Preenche os campos com os valores desejados
        usernameField.value = 'monique.silva';
        passwordField.value = 'Gratidao2024';

        // Clica no botão de login
        loginButton.click();
    } else {
        console.error('Os campos de username, password ou o botão de login não foram encontrados.');
    }
}

// Verifica a URL da página
if (window.location.href.startsWith('https://keycloak2.trt1.jus.br/auth/realms')) {
    // Define um atraso de 2 segundos (2000 milissegundos) antes de executar a função
    setTimeout(preencherCamposElogar, 2000);
}
