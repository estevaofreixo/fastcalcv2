// Automatiza horas extras 50% no PjeCalc

// Função que será executada após atraso
function executarVerificacoes() {
    // Verifica se a URL atual começa com a URL especificada
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation")) {
        
        // Seleciona o input com o id "formulario:descricao"
        var descricaoInput = document.getElementById("formulario:descricao");
        
        // Verifica se o valor do input é "HORAS EXTRAS 50%"
        if (descricaoInput && descricaoInput.value === "HORAS EXTRAS 50%") {
            
            // Seleciona o select com o id "formulario:baseHistoricos"
            var baseHistoricosSelect = document.getElementById("formulario:baseHistoricos");
            
            if (baseHistoricosSelect) {
                // Itera sobre as opções do select
                for (var i = 0; i < baseHistoricosSelect.options.length; i++) {
                    var option = baseHistoricosSelect.options[i];
                    
                    // Verifica se o texto da opção é "REMUNERAÇÃO"
                    if (option.text === "REMUNERAÇÃO") {
                        // Define o valor da opção como selecionado
                        baseHistoricosSelect.value = option.value;
                        
                        // Cria um evento de mudança
                        var event = new Event('change', { bubbles: true });
                        
                        // Dispara o evento de mudança no select
                        baseHistoricosSelect.dispatchEvent(event);
                        
                        // Define um atraso antes de clicar no botão
                        setTimeout(function() {
                            // Seleciona o botão com o id "formulario:incluirBaseHistorico"
                            var botaoIncluir = document.getElementById("formulario:incluirBaseHistorico");
                            
                            // Verifica se o botão foi encontrado
                            if (botaoIncluir) {
                                // Dispara o evento de clique no botão
                                botaoIncluir.click();
                            }
                            
                            // Define um atraso antes de selecionar o rádio
                            setTimeout(function() {
                                // Seleciona o input de rádio com o id "formulario:tipoDaQuantidade:2"
                                var radioInput = document.getElementById("formulario:tipoDaQuantidade:2");
                                
                                // Verifica se o input de rádio foi encontrado
                                if (radioInput) {
                                    // Marca o input de rádio
                                    radioInput.checked = true;
                                    
                                    // Cria um evento de mudança
                                    var radioEvent = new Event('change', { bubbles: true });
                                    
                                    // Dispara o evento de mudança no input de rádio
                                    radioInput.dispatchEvent(radioEvent);
                                    
                                    // Define um atraso de 500 milissegundos antes de selecionar a opção no segundo select
                                    setTimeout(function() {
                                        // Seleciona o select com o id "formulario:tipoImportadadoDoCartaoDePontoQuantidade"
                                        var tipoImportacaoSelect = document.getElementById("formulario:tipoImportadadoDoCartaoDePontoQuantidade");
                                        
                                        if (tipoImportacaoSelect) {
                                            // Itera sobre as opções do select
                                            for (var j = 0; j < tipoImportacaoSelect.options.length; j++) {
                                                var tipoOption = tipoImportacaoSelect.options[j];
                                                
                                                // Verifica se o texto da opção é "Hs EXT."
                                                if (tipoOption.text === "Hs EXT") {
                                                    // Define o valor da opção como selecionado
                                                    tipoImportacaoSelect.value = tipoOption.value;
                                                    
                                                    // Cria um evento de mudança
                                                    var tipoEvent = new Event('change', { bubbles: true });
                                                    
                                                    // Dispara o evento de mudança no select
                                                    tipoImportacaoSelect.dispatchEvent(tipoEvent);
                                                    break;
                                                }
                                            }
                                        }
                                    }, 500);
                                }
                                
                                // Define um atraso antes de clicar no botão "formulario:incluirCartaoDePontoQuantidade"
                                setTimeout(function() {
                                    // Seleciona o botão com o id "formulario:incluirCartaoDePontoQuantidade"
                                    var botaoAddItemCartao = document.getElementById("formulario:incluirCartaoDePontoQuantidade");
                                    
                                    // Verifica se o botão foi encontrado
                                    if (botaoAddItemCartao) {
                                        // Dispara o evento de clique no botão
                                        botaoAddItemCartao.click();
                                    }
                                }, 500);
                                
                            }, 500);
                            
                        }, 500);
                        
                        break;
                    }
                }
            }
        }
    }
}

// Executa a função após 3 segundos
setTimeout(executarVerificacoes, 3000);
