
// Assina o cálculo importado para o Pje


// Assina o cálculo importado para o Pje

// Função para verificar se há um checkbox na página e clicar nele
function clicarNoCheckbox() {
    // Verifica se o usuário está em uma URL que termina com "calculo"
    if (window.location.href.endsWith("calculo")) {
        // Seleciona o primeiro checkbox encontrado na página
        var checkbox = document.querySelector('input[type="checkbox"]');
        if (checkbox) {
            // Simula um evento de clique no checkbox
            checkbox.click();
            
            // Clicar no botão "Assinar" somente se o checkbox existir e for clicado
            var botaoAssinar = document.querySelector('button[name="Assinar"]');
            if (botaoAssinar) {
                setTimeout(function() {
                    botaoAssinar.click();
                }, 500); // Clica no botão após 500ms
            }
        }
    }
}

// Aguarda 1 segundo antes de iniciar as ações
setTimeout(clicarNoCheckbox, 1000);
