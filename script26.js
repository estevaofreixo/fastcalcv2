// Automatiza multa do 467 no Pjecalc

// Function to check if the user is on the specific URL
function checkURL() {
    return window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf");
}

// Function to insert a button into the table after 2 seconds
function insertButtonIntoTable() {
    
        if (checkURL()) {
            var table = document.querySelector('table[width="100%"][cellpadding="0"][cellspacing="0"]');
            if (table) {
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
                        'formulario:listagem:4:listaReflexo:0:ativo'
                    ];

                    checkboxIds.forEach(function(id) {
                        var checkbox = document.getElementById(id);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    });
                });

                table.appendChild(button);
            }
        }
    
}

// Iniciar a função após 2 segundos
insertButtonIntoTable();
