// Insere Estado e Município no Pjecalc

// Função para verificar se o usuário está na URL específica e realizar ações com base nisso
function verificarURL() {
    // Obtém a URL atual
    var urlAtual = window.location.href;

    // Verifica se a URL começa com "https://pje.trt1.jus.br/pjecalc/pages/calculo/calculo"
    if (urlAtual.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/calculo")) {
        // Seleciona o select de estado e define a opção como "RJ"
        var selectEstado = document.getElementById("formulario:estado");
        if (selectEstado) {
            selectEstado.value = "18"; // Valor para o estado do Rio de Janeiro

            // Dispara o evento de mudança no select de estado
            selectEstado.dispatchEvent(new Event("change"));

            // Aguarda 3 segundos antes de selecionar a opção no segundo select
            setTimeout(function() {
                // Seleciona o select de município
                var selectMunicipio = document.getElementById("formulario:municipio");
                if (selectMunicipio) {
                    // Percorre as opções do select de município
                    for (var i = 0; i < selectMunicipio.options.length; i++) {
                        // Verifica se o texto da opção é "RIO DE JANEIRO"
                        if (selectMunicipio.options[i].text === "RIO DE JANEIRO") {
                            // Define o valor do select como o valor da opção correspondente
                            selectMunicipio.value = selectMunicipio.options[i].value;

                            // Dispara o evento de mudança no select de município
                            selectMunicipio.dispatchEvent(new Event("change"));
                            break;
                        }
                    }

                    // Recupera a data inserida do localStorage
                    var dataInserida = localStorage.getItem("dataInserida");
                    
                    // Insere a data recuperada no input desejado, se o campo estiver vazio
                    var inputDate = document.getElementById("formulario:dataAjuizamentoInputDate");
                    if (inputDate && dataInserida) {
                        // Só define o valor se o campo estiver vazio
                        if (!inputDate.value) {
                            inputDate.value = dataInserida;
                        }
                    }
                }
            }, 2000); 
        }
    }
}

// Chama a função de verificação ao carregar a página
verificarURL();
