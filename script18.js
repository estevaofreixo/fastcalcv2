
// Automatiza as configurações da verba SALDO DE SALÁRIO no Pjecalc

// Função para verificar se a URL começa com o prefixo especificado
function urlComecaCom(prefixo) {
    return window.location.href.startsWith(prefixo);
}

// Função para marcar o checkbox
function marcarCheckbox() {
    var checkbox = document.getElementById('formulario:aplicarProporcionalidadeABase');
    var descricaoInput = document.getElementById('formulario:descricao');
    
    if (checkbox && descricaoInput) {            
            checkbox.checked = true;                    
    } else {
        console.log('Checkbox ou descricaoInput não encontrados.');
    }
}

// Função para marcar o checkbox 
function marcarCheckboxComAtraso() {
    setTimeout(marcarCheckbox, 500);
    observer.disconnect();  
}

// Função para ativar todas as instruções
function ativarInstrucoes() {
    // Verifica se a URL corresponde ao padrão desejado
    if (urlComecaCom("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation")) {
        // Seleciona o input de descrição
        var descricaoInput = document.getElementById('formulario:descricao');
        // Verifica se o input contém a informação "SALDO DE SALÁRIO"
        if (descricaoInput && (descricaoInput.value === "SALDO DE SALÁRIO")) {         
            observer.disconnect(); 
            // Seleciona o elemento da caixa de seleção
            var selectElement = document.getElementById('formulario:tipoDaBaseTabelada');
            // Verifica se o elemento da caixa de seleção foi encontrado
            if (selectElement) {
                // Define o valor da caixa de seleção para "MAIOR_REMUNERACAO"
                selectElement.value = 'MAIOR_REMUNERACAO';                
                // Dispara o evento de mudança para que a página reaja à seleção
                var event = new Event('change', { bubbles: true });
                selectElement.dispatchEvent(event);                
                // Marca o checkbox após 2 segundos
                marcarCheckboxComAtraso();                
            } else {
                console.log('Elemento da caixa de seleção não encontrado.');
            }
        }
    } else {
        console.log('A URL não corresponde ao padrão desejado.');
    }
}

// Função para ativar as instruções 
function ativarInstrucoesComAtraso() {
    setTimeout(ativarInstrucoes, 2000); 
}

// Ativar as instruções pela primeira vez
ativarInstrucoesComAtraso();

// Configurar um observador de mutação para detectar mudanças na página
var observer = new MutationObserver(function(mutations) {
    // Quando ocorrer uma mutação, ativar as instruções novamente após 2 segundos
    ativarInstrucoesComAtraso();
});

// Configurar o observador para observar mudanças no corpo do documento e subárvore
var observerConfig = { childList: true, subtree: true };

// Iniciar a observação do documento
observer.observe(document.body, observerConfig);
