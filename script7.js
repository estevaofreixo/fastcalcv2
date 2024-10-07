// Imprime planilha de cálculos no Pjecalc

// Verifica se a URL atual começa com o prefixo especificado
if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/relatorio/relatorio-calculo.jsf?conversation")) {
    // Localiza o checkbox pelo ID e desmarca-o
    var checkbox = document.getElementById("formulario:tipoDeRelatorio:4");
    if (checkbox) {
        checkbox.checked = false;
    } else {
        console.log("Checkbox não encontrado.");
    }

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
