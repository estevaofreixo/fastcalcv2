// Preenche as informações de login no site BB

// Função para inserir informações nos campos e marcar o checkbox após 2 segundos
function inserirInformacoes() {
    // Verifica se o usuário está na URL específica
    if (window.location.href.startsWith("https://www63.bb.com.br/portalbb/djo/login")) {
        // Insere a informação nos campos de usuário e senha
        document.getElementById("loginForm:username").value = "J3011293";
        document.getElementById("loginForm:password").value = "65vara65";        
        
    }
}

// Aguarde 800 milissegundos (ou 0.8 segundos) antes de executar as instruções
setTimeout(inserirInformacoes, 800);
