
// Automatiza a marcação dos checkboxes para base de calc do FGTS

// Função que verifica a URL e insere o botão se a URL for a esperada
function verificarEInserirBotao() {
  // Verificar se a URL começa com o padrão especificado
  if (window.location.href.startsWith('https://pje.trt1.jus.br/pjecalc/pages/calculo/historico-salarial.jsf?conversation')) {
      // Função que insere o botão no fieldset
      function inserirBotao() {
          // Encontrar o fieldset com style="width: 721px;"
          var fieldsets = document.querySelectorAll('fieldset[style="width: 721px;"]');

          // Se houver pelo menos um fieldset encontrado e o botão ainda não foi inserido
          if (fieldsets.length > 0 && !document.getElementById('meuBotaoPersonalizado')) {
              // Criar o botão
              var botao = document.createElement('button');
              botao.innerText = 'Clique Aqui';
              botao.id = 'meuBotaoPersonalizado'; // Atribuir um ID único ao botão

              // Estilizar o botão
              botao.style.position = 'fixed';
              botao.style.top = '50%';
              botao.style.right = '38%';
              botao.style.padding = '10px 20px';
              botao.style.backgroundColor = '#007bff';
              botao.style.color = 'white';
              botao.style.border = 'none';
              botao.style.borderRadius = '5px';
              botao.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              botao.style.cursor = 'pointer';
              botao.style.zIndex = '1000';

              botao.onclick = function() {
                // Encontrar todos os checkboxes
                var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="formulario:listagemMC:"][id$="incideFGTS"]');
            
                var idsCheckboxesEntre = []; // Lista para armazenar os IDs dos checkboxes entre o último marcado e o primeiro marcado antes dele
                var primeiroCheckboxMarcadoAntes = null; // ID do primeiro checkbox marcado antes do último marcado
                var ultimoCheckboxMarcadoId = null;
                var ultimoCheckboxMarcadoNumero = -1;
            
                // Encontrar o último checkbox marcado
                checkboxes.forEach(function(checkbox) {
                    if (checkbox.checked) {
                        var idParts = checkbox.id.split(':');
                        var numero = parseInt(idParts[idParts.length - 2]); // Extrair o número do ID
                        if (numero > ultimoCheckboxMarcadoNumero) {
                            ultimoCheckboxMarcadoNumero = numero;
                            ultimoCheckboxMarcadoId = checkbox.id;
                        }
                    }
                });
            
                // Se houver um último checkbox marcado, encontrar os IDs dos checkboxes entre ele e o primeiro marcado antes dele
                if (ultimoCheckboxMarcadoId !== null) {
                    var encontrouUltimo = false;
                    checkboxes.forEach(function(checkbox) {
                        if (!encontrouUltimo && checkbox.checked && checkbox.id !== ultimoCheckboxMarcadoId) {
                            primeiroCheckboxMarcadoAntes = checkbox.id; // Salvar o ID do primeiro checkbox marcado antes do último
                        }
                        if (checkbox.id === ultimoCheckboxMarcadoId) encontrouUltimo = true;
            
                        if (encontrouUltimo && checkbox.id !== ultimoCheckboxMarcadoId && checkbox.id !== primeiroCheckboxMarcadoAntes) {
                            idsCheckboxesEntre.push(checkbox.id); // Adicionar o ID do checkbox à lista
                        }
                    });
                }
            
                // Exibir os IDs dos checkboxes entre o último marcado e o primeiro marcado antes dele, o último marcado e o primeiro marcado antes dele em um alerta
                alert('O id do último checkbox marcado é: ' + ultimoCheckboxMarcadoId + 
                      '\nO id do primeiro checkbox marcado antes do último marcado é: ' + primeiroCheckboxMarcadoAntes + 
                      '\nOs ids dos checkboxes entre o último marcado e o primeiro marcado antes dele são: ' + idsCheckboxesEntre.join(', '));
            };
            
                                               
                               
                      
             // Inserir o botão no body para posicionamento absoluto
              document.body.appendChild(botao);
          }
      }

      // Inserir o botão inicialmente após 2 segundos
      setTimeout(inserirBotao, 2000);

      // Configurar o MutationObserver para reinserir o botão em caso de mudanças na página
      var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
              inserirBotao();
          });
      });

      // Observar mudanças no corpo da página
      observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Executar a função para verificar a URL e configurar a reinserção do botão
verificarEInserirBotao();

