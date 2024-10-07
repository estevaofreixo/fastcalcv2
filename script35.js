
// Configura lançamento Embargos à Execução

setTimeout(() => {
    // Verifica a URL da página
    if (window.location.href.startsWith('https://pje.trt1.jus.br/pjekz/processo')) {

        // Função para verificar e clicar no checkbox e selecionar a opção no mat-select
        function checkAndClickCheckbox() {
            // Intervalo para verificar a presença do checkbox a cada 2 segundos
            const intervalId = setInterval(() => {
                // Verifica se o span desejado está presente na página
                const checkboxSpan = document.querySelector('span.mat-checkbox-inner-container > input.mat-checkbox-input');
                
                if (checkboxSpan) {
                    // Obtém todos os elementos p com a classe 'corpo'
                    const corpoParagraphs = document.querySelectorAll('p.corpo');
                    let foundProcedentesEmParte = false;
                    let foundProcedentes = false;
                    let foundImprocedentes = false;
                    let foundEmbargos = false;

                    corpoParagraphs.forEach(paragraph => {
                        if (paragraph.textContent.includes('IMPROCEDENTES')) {
                            foundImprocedentes = true;                        
                        }
                        if (paragraph.textContent.includes('PROCEDENTES EM PARTE')) {
                            foundProcedentesEmParte = true;
                        }
                        if (paragraph.textContent.includes('PROCEDENTES') && !foundProcedentesEmParte) {
                            foundProcedentes = true;
                        }
                        if (paragraph.textContent.includes('EMBARGOS À EXECUÇÃO')) {
                            foundEmbargos = true;
                        }
                    });

                    let targetCheckbox;
                    if (foundImprocedentes) {
                        // Procura o checkbox associado ao texto "Julgado(s) improcedente(s) o(s) pedido(s)"
                        targetCheckbox = document.evaluate("//span[contains(., 'Julgado(s) improcedente(s) o(s) pedido(s)')]/preceding::input[@type='checkbox'][1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    } else if (foundProcedentesEmParte) {
                        // Procura o checkbox associado ao texto "Julgado(s) procedente(s) em parte o(s) pedido(s)"
                        targetCheckbox = document.evaluate("//span[contains(., 'Julgado(s) procedente(s) em parte o(s) pedido(s)')]/preceding::input[@type='checkbox'][1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    } else if (foundProcedentes) {
                        // Procura o checkbox associado ao texto "Julgado(s) procedente(s) o(s) pedido(s)"
                        targetCheckbox = document.evaluate("//span[contains(., 'Julgado(s) procedente(s) o(s) pedido(s)')]/preceding::input[@type='checkbox'][1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    }

                    if (targetCheckbox) {
                        // Verifica se o checkbox já está marcado
                        if (!targetCheckbox.checked) {
                            targetCheckbox.click();
                            console.log('Checkbox clicado com sucesso.');

                            // Para o intervalo
                            clearInterval(intervalId);

                            // Após clicar no checkbox, aguarde 2 segundos e verifique o mat-select
                            setTimeout(() => {
                                if (foundEmbargos) {
                                    // Procura pelo span com o texto exato 'Nome do incidente'
                                    const matSelectPlaceholder = Array.from(document.querySelectorAll('span.mat-select-placeholder'))
                                        .find(span => span.textContent.trim() === 'Nome do incidente');

                                    if (matSelectPlaceholder) {
                                        // Encontra o elemento pai <mat-select> a partir do span
                                        const matSelect = matSelectPlaceholder.closest('mat-select');
                                        if (matSelect) {
                                            matSelect.click(); // Abre o mat-select

                                            setTimeout(() => {
                                                const firstOption = document.querySelector('mat-option');
                                                if (firstOption) {
                                                    firstOption.click(); // Seleciona a primeira opção

                                                    // Verifica o número de opções disponíveis após selecionar a primeira opção
                                                    setTimeout(() => {
                                                        const matSelectNomeParte = Array.from(document.querySelectorAll('span.mat-select-placeholder'))
                                                            .find(span => span.textContent.trim() === 'Nome da parte');

                                                        if (matSelectNomeParte) {
                                                            const matSelect2 = matSelectNomeParte.closest('mat-select');
                                                            if (matSelect2) {
                                                                matSelect2.click(); // Abre o segundo mat-select

                                                                setTimeout(() => {
                                                                    const options = document.querySelectorAll('mat-option');
                                                                    if (options.length === 2) {
                                                                        // Se houver exatamente duas opções, seleciona a segunda
                                                                        options[1].click();
                                                                        console.log('Segunda opção selecionada com sucesso.');
                                                                    }

                                                                }, 500); // Tempo para garantir que as opções estejam carregadas
                                                            }
                                                        }
                                                    }, 500); // Tempo para garantir que o mat-select com "Nome da parte" esteja visível
                                                }
                                            }, 500); // Tempo para garantir que as opções estejam carregadas
                                        }
                                    }
                                }
                            }, 2000); // Atraso de 2 segundos após clicar no checkbox
                        } else {
                            console.log('Checkbox já está marcado. Nenhuma ação necessária.');
                            clearInterval(intervalId); // Para o intervalo se o checkbox já estiver marcado
                        }
                    } else {
                        console.log('Checkbox alvo não encontrado.');
                    }
                }
            }, 2000); // Intervalo de 2 segundos para verificar a presença do checkbox
        }

        // Chama a função para verificar e clicar no checkbox e selecionar a opção
        checkAndClickCheckbox();
    } else {
        console.log('URL não corresponde ao padrão especificado.');
    }
}, 3000);
