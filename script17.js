// Registra a data da distribuição da ação na página "detalhe" do processo

setTimeout(function() {
    // Verifica se a URL começa com o prefixo desejado
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjekz/processo")) {
        // Espera 2 segundos para garantir que a página esteja carregada completamente

        // Encontra o elemento com o ID "dataAutuacao"
        var dataAutuacaoElement = document.getElementById("dataAutuacao");

        // Verifica se o elemento foi encontrado
        if (dataAutuacaoElement) {
            // Encontra o elemento <dd> associado ao elemento <dt> com o ID "dataAutuacao"
            var ddElement = dataAutuacaoElement.nextElementSibling;

            // Verifica se o elemento <dd> foi encontrado
            if (ddElement) {
                // Obtém o valor da data inserida
                var dataCompleta = ddElement.innerText;

                // Extrai apenas a parte da data no formato "dd/mm/aaaa"
                var partesData = dataCompleta.split(" ");
                var dataFormatada = partesData[0];

                // Salva a data formatada no localStorage
                localStorage.setItem("dataInserida", dataFormatada);
            } else {
                console.error("Elemento <dd> não encontrado.");
            }
        } else {
            console.error("Elemento com ID 'dataAutuacao' não encontrado.");
        }
    } else {
        console.log("URL não corresponde ao padrão esperado.");
    }
}, 2000);


