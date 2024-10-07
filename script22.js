// Clica em "LIQUIDAR" e "IMPRIMIR" na planilha de cálculo externo do Pjecalc e Clica em 

// Espera 2 segundos antes de começar a executar
setTimeout(function() {
    // Verifica se o usuário está em uma URL que começa com https://pje.trt1.jus.br/pjecalc/pages/pagamento/liquidacao-pagamento.jsf?conversation
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/pagamento/liquidacao-pagamento.jsf?conversation")) {
        // Seleciona o botão de liquidar
        var botaoLiquidar = document.getElementById("formulario:liquidar");
        // Verifica se o botão foi encontrado
        if (botaoLiquidar) {
            // Simula o clique no botão
            botaoLiquidar.click();
        } else {
            console.error("Botão de liquidar não encontrado.");
        }
    }
}, 100); // 2 segundos de espera



// Verifica se a URL atual começa com o prefixo especificado
if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/pagamento/relatorio-pagamento.jsf?conversation")) {
    
    // Localiza o botão "Imprimir" pelo ID e clica nele
    var imprimirBotao = document.getElementById("formulario:imprimirConsolidado");
    if (imprimirBotao) {
        imprimirBotao.click();
    } else {
        console.log("Botão 'Imprimir' não encontrado.");
    }
} else {
    console.log("Você não está na URL correta para executar esta ação.");
}
