// Coloca data atual no liquidar no Pjecalc

// Verifica se a URL começa com o prefixo especificado
function urlComecaCom(prefixo) {
    return window.location.href.startsWith(prefixo);
}

// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a URL corresponde ao padrão desejado
    if (urlComecaCom("https://pje.trt1.jus.br/pjecalc/pages/calculo/liquidacao.jsf?conversation")) {
        // Desabilita temporariamente a execução de scripts
        var evalBackup = window.eval;
        window.eval = null;

        // Adiciona um event listener para o evento de pressionar tecla
        document.addEventListener("keydown", function(event) {
            // Verifica se a tecla pressionada é a tecla "Esc" (código 27)
            if (event.keyCode === 27) {
                // Interrompe todas as instruções de JavaScript
                window.eval = evalBackup; // Restaura a execução de scripts antes de retornar
                return;
            }
        });

        // Cria um objeto de data para a data atual
        var dataAtual = new Date();

        // Formata a data atual para o formato esperado pelo campo de input
        var diaAtual = dataAtual.getDate();
        var mesAtual = dataAtual.getMonth() + 1; // Mês começa do zero, então é necessário adicionar 1
        var anoAtual = dataAtual.getFullYear();
        var dataFormatada = (diaAtual < 10 ? '0' : '') + diaAtual + '/' + (mesAtual < 10 ? '0' : '') + mesAtual + '/' + anoAtual;

        // Seleciona o campo de input de data
        var input = document.getElementById('formulario:dataDeLiquidacaoInputDate');

        // Define o valor do campo de input para a data atual
        input.value = dataFormatada;

        // Clica no botão para abrir o calendário popup
        document.getElementById('formulario:dataDeLiquidacaoPopupButton').click();

        // Aguarda um segundo
        setTimeout(function() {
            // Clica no botão "Liquidar"
            document.getElementById('formulario:liquidar').click();
        }, 100);
        
        // Restaura a execução de scripts
        window.eval = evalBackup;
    }
});















