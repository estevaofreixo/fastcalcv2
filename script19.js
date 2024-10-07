// Automatiza as configurações da verba 13º SALÁRIO no Pjecalc

// Função para verificar se a URL começa com o prefixo especificado
function urlComecaCom(prefixo) {
    return window.location.href.startsWith(prefixo);
}


// Função para ativar todas as instruções
function ativarInstrucoes2() {
    // Verifica se a URL corresponde ao padrão desejado
    if (urlComecaCom("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation")) {
        // Seleciona o input de descrição
        var descricaoInput = document.getElementById('formulario:descricao');
        // Verifica se o input contém a informação "SALDO DE SALÁRIO"
        if (descricaoInput && (descricaoInput.value === "13º SALÁRIO")) {         
                
            observer2.disconnect(); 
            // Seleciona o elemento da caixa de seleção
            var selectElement = document.getElementById('formulario:tipoDaBaseTabelada');
            // Verifica se o elemento da caixa de seleção foi encontrado
            if (selectElement) {

                observer2.disconnect(); 
                // Define o valor da caixa de seleção para "MAIOR_REMUNERACAO"
                selectElement.value = 'MAIOR_REMUNERACAO';

                // Dispara o evento de mudança para que a página reaja à seleção
                var event = new Event('change', { bubbles: true });
                selectElement.dispatchEvent(event);
                
                observer2.disconnect(); 
                
            } else {
                console.log('Elemento da caixa de seleção não encontrado.');
            }            
                
        }
    } else {
        console.log('A URL não corresponde ao padrão desejado.');
    }
    
}


// Configurar um observador de mutação para detectar mudanças na página
var observer2 = new MutationObserver(function(mutations) {
    // Quando ocorrer uma mutação, ativar as instruções novamente após 2 segundos
    ativarInstrucoesComAtraso2();
});

// Configurar o observador para observar mudanças no corpo do documento e subárvore
var observerConfig2 = { childList: true, subtree: true };

// Iniciar a observação do documento
observer2.observe(document.body, observerConfig2);

// Ativar as instruções pela primeira vez
ativarInstrucoesComAtraso2();

// Função para ativar as instruções 
function ativarInstrucoesComAtraso2() {
    setTimeout(ativarInstrucoes2, 2000); 
}