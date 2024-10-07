// Configura parâmetros de atualização no Pjecalc

// Função para verificar se a URL começa com o prefixo especificado
function urlComecaCom(prefixo) {
    return window.location.href.startsWith(prefixo);
}

// Função para abrir a caixa de seleção e selecionar a opção desejada
function abrirCaixaSelecao() {
    // Seleciona o elemento da caixa de seleção
    var selectElement = document.getElementById('formulario:indiceTrabalhista');

    // Verifica se o elemento da caixa de seleção foi encontrado
    if (selectElement) {
        // Define o valor da caixa de seleção para "IPCAE"
        selectElement.value = 'IPCAE';

        // Dispara o evento de mudança para que a página reaja à seleção
        var event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
    } else {
        console.log('Elemento da caixa de seleção não encontrado.');
    }
}

// Função para acionar a função quando o checkbox é marcado
function acionarFuncaoCheckbox() {
    // Simula o evento de clique no checkbox
    var checkbox = document.getElementById('formulario:combinarOutroIndice');
    if (checkbox) {
        checkbox.checked = true;
        checkbox.onchange(); // Dispara o evento de mudança
    } else {
        console.log('Checkbox não encontrado.');
    }
}

// Função para abrir a caixa de seleção e selecionar a opção desejada
function selecionarOpcao() {
    // Atrasa a execução da função em 2 segundos
    setTimeout(function() {
        // Seleciona o elemento da caixa de seleção
        var selectElement = document.getElementById('formulario:outroIndiceTrabalhista');

        // Verifica se o elemento da caixa de seleção foi encontrado
        if (selectElement) {
            // Define o valor da caixa de seleção para "SEM CORRECAO"
            selectElement.value = 'SEM_CORRECAO';

            // Dispara o evento de mudança para que a página reaja à seleção
            var event = new Event('change', { bubbles: true });
            selectElement.dispatchEvent(event);
        } else {
            console.log('Elemento da caixa de seleção não encontrado.');
        }
    }, 500); 
}

// Função para desmarcar o checkbox
function desmarcarCheckbox() {
    // Seleciona o elemento do checkbox
    var checkbox = document.getElementById('formulario:aplicarJurosFasePreJudicial');
    if (checkbox) {
        checkbox.checked = false;
        checkbox.onchange(); // Dispara o evento de mudança
    } else {
        console.log('Checkbox não encontrado.');
    }
}

// Função para selecionar a opção "SELIC" na caixa de seleção de juros
function selecionarOpcaoJuros() {
    // Seleciona o elemento da caixa de seleção de juros
    var selectElement = document.getElementById('formulario:juros');

    // Verifica se o elemento da caixa de seleção de juros foi encontrado
    if (selectElement) {
        // Define o valor da caixa de seleção de juros para "SELIC"
        selectElement.value = 'SELIC';

        // Dispara o evento de mudança para que a página reaja à seleção
        var event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
    } else {
        console.log('Elemento da caixa de seleção de juros não encontrado.');
    }
}

// Função para desmarcar o checkbox formulario:correcaoLei11941
function desmarcarCheckboxCorrecaoLei11941() {
    // Seleciona o elemento do checkbox
    var checkbox = document.getElementById('formulario:correcaoLei11941');
    if (checkbox) {
        checkbox.checked = false; // Desmarca o checkbox
        // Dispara o evento onchange manualmente
        var event = new Event('change', { bubbles: true });
        checkbox.dispatchEvent(event);
    } else {
        console.log('Checkbox formulario:correcaoLei11941 não encontrado.');
    }
}

// Verifica se a URL corresponde ao padrão desejado antes de executar a ação
if (urlComecaCom("https://pje.trt1.jus.br/pjecalc/pages/calculo/parametros-atualizacao/parametros-atualizacao")) {
    // Atrasa a execução das instruções em 2 segundos
    setTimeout(function() {

        // Chama a função para desmarcar o checkbox formulario:correcaoLei11941
        desmarcarCheckboxCorrecaoLei11941();

        // Chama a função para abrir a caixa de seleção e selecionar a opção desejada
        abrirCaixaSelecao();
        
        // Chama a função para acionar a função quando o checkbox é marcado
        acionarFuncaoCheckbox();

        // Chama a função para selecionar a opção na segunda caixa de seleção
        selecionarOpcao();
        
        // Chama a função para desmarcar o checkbox
        desmarcarCheckbox();

        // Atrasa a execução da função selecionarOpcaoJuros 
        setTimeout(selecionarOpcaoJuros, 500); 

        // Atrasa a execução da função para preencher o input de data em 1 segundo
        setTimeout(function() {
            // Recupera a data formatada do localStorage
            var dataFormatada = localStorage.getItem("dataInserida");
            
            // Seleciona o elemento do input de data
            var inputElement = document.getElementById('formulario:apartirDeOutroIndiceInputDate');
            if (inputElement && dataFormatada) {
                // Define o valor do input de data como a data formatada recuperada
                inputElement.value = dataFormatada;
            } else {
                console.log('Elemento do input de data não encontrado ou data não armazenada.');
            }
        }, 500);

        // Seleciona o botão com a classe botaoAddItem e simula um clique
        setTimeout(() => {
            
        
        var botaoAddItem = document.querySelector('.botaoAddItem');
        if (botaoAddItem) {
            botaoAddItem.click(); // Simula o clique no botão
        } else {
            console.log('Botão com a classe botaoAddItem não encontrado.');
        }
    }, 1000);

    }, 1000);  
} else {
    console.log('A URL não corresponde ao padrão desejado.');
}
