// Configura Multa do 477 no PjeCalc

// Função para verificar a URL e executar ações
function verificarEExecutar() {
    // Verifica se a URL da página começa com o valor desejado
    if (window.location.href.startsWith('https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation')) {
        // Define um intervalo para verificar repetidamente
        const intervalo = setInterval(() => {
            // Obtém o valor do input com id "formulario:descricao"
            const descricaoInput = document.getElementById('formulario:descricao');
            
            // Verifica se o input existe e se o valor contém "MULTA DO ARTIGO 477 DA CLT"
            if (descricaoInput && descricaoInput.value.includes('MULTA DO ARTIGO 477 DA CLT')) {
                // Se encontrado, limpa o intervalo
                clearInterval(intervalo);
                
                // Marca o radio button com id "formulario:valor:1"
                const radioInput = document.getElementById('formulario:valor:1');
                if (radioInput) {
                    radioInput.checked = true;
                    
                    // Dispara o evento de mudança para o radio button
                    const event = new Event('change', { bubbles: true });
                    radioInput.dispatchEvent(event);
                    
                    // Espera 500 milissegundos após o evento de mudança para definir o valor
                    setTimeout(() => {
                        // Obtém o input com id "formulario:valorInformadoDoDevido"
                        const valorInput = document.getElementById('formulario:valorInformadoDoDevido');
                        if (valorInput) {
                            valorInput.focus(); // Posiciona o cursor no input
                        }
                    }, 500); // 500 milissegundos
                }
            }
        }, 1000); // Verifica a cada 1 segundo (1000 milissegundos)
    }
}

// Executa a função
verificarEExecutar();
