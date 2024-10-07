// Automatiza multa do 467 no Pjecalc

// Function to check if the user is on the specific URL
function checkURL() {
    return window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf");
}

// Function to insert a button into the specified <span>
function insertButtonIntoSpan() {
    if (checkURL()) {
        var descricaoInput = document.getElementById('formulario:descricao');
        if (!descricaoInput) {
            var span = document.getElementById('formulario:panelBotoes');
            if (span) {
                var button = document.createElement('button');
                button.textContent = 'Multa art. 467';
                button.style.backgroundColor = '#087cac';
                button.style.border = 'none';
                button.style.color = 'white';
                button.style.padding = '13px 24px';
                button.style.textAlign = 'center';
                button.style.textDecoration = 'none';
                button.style.fontSize = '16px';
                button.style.margin = '4px 2px';
                button.style.cursor = 'pointer';
                button.style.borderRadius = '10px';
                button.style.marginLeft = '75%';

                // Adicionando o ouvinte de evento de clique ao botão
                button.addEventListener('click', function() {
                    var checkboxIds = [
                        'formulario:listagem:0:listaReflexo:0:ativo',
                        'formulario:listagem:1:listaReflexo:0:ativo',
                        'formulario:listagem:2:listaReflexo:0:ativo',
                        'formulario:listagem:3:listaReflexo:0:ativo',
                        'formulario:listagem:4:listaReflexo:0:ativo',
                        'formulario:listagem:5:listaReflexo:0:ativo',
                        'formulario:listagem:6:listaReflexo:0:ativo',
                        'formulario:listagem:7:listaReflexo:0:ativo',
                        'formulario:listagem:8:listaReflexo:0:ativo',
                        'formulario:listagem:9:listaReflexo:0:ativo',
                        'formulario:listagem:10:listaReflexo:0:ativo'
                    ];

                    // Function to check and click checkboxes
                    function checkAndClickCheckboxes() {
                        var promises = checkboxIds.map(function(id) {
                            return new Promise(function(resolve) {
                                var checkbox = document.getElementById(id);
                                if (checkbox) {
                                    var td = checkbox.closest('td.rich-table-cell.colunaReflexo');
                                    if (td) {
                                        var span = td.querySelector('span.panelLabel');
                                        if (span) {
                                            if (span.innerText.includes("MULTA DO ARTIGO 467 DA CLT SOBRE SALDO DE SALÁRIO") ||
                                                span.innerText.includes("MULTA DO ARTIGO 467 DA CLT SOBRE 13º SALÁRIO") ||
                                                span.innerText.includes("MULTA DO ARTIGO 467 DA CLT SOBRE AVISO PRÉVIO") ||
                                                span.innerText.includes("MULTA DO ARTIGO 467 DA CLT SOBRE FÉRIAS + 1/3")) {
                                                if (!checkbox.checked) {
                                                    checkbox.click();
                                                }
                                                resolve(checkbox.checked);
                                            } else {
                                                resolve(false);
                                            }
                                        } else {
                                            resolve(false);
                                        }
                                    } else {
                                        resolve(false);
                                    }
                                } else {
                                    resolve(false);
                                }
                            });
                        });

                        Promise.all(promises).then(function(results) {
                            if (results.every(Boolean)) {
                                clearInterval(intervalId);
                                console.log('Todos os checkboxes foram marcados.');
                            } else {
                                console.log('Ainda há checkboxes desmarcados. Repetindo...');
                            }
                        });
                    }

                    // Check and click checkboxes every 2 seconds
                    var intervalId = setInterval(checkAndClickCheckboxes);
                });

                span.appendChild(button);
            }
        }
    }
}

// Inicia a função 
insertButtonIntoSpan();
