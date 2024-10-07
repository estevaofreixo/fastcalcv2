// Configura honorários rda - PjeCalc

// Função principal que será executada após 2 segundos
function iniciarObservador() {
    // Verificar se a URL começa com o padrão especificado
    if (window.location.href.startsWith('https://pje.trt1.jus.br/pjecalc/pages/calculo/honorarios.jsf?conversation')) {
      
      // Função para verificar se o input rádio foi marcado
      function verificarInput() {
        const inputRadio = document.getElementById('formulario:tipoDeDevedor:0');
        if (inputRadio && inputRadio.checked) {
          // Marcar o input checkbox 'formulario:tipoCobrancaReclamante:1'
          const checkboxTipoCobranca = document.getElementById('formulario:tipoCobrancaReclamante:1');
          if (checkboxTipoCobranca) {
            checkboxTipoCobranca.checked = true;
          }
  
          // Marcar o input checkbox 'formulario:tipoValor:0'
          const checkboxTipoValor = document.getElementById('formulario:tipoValor:0');
          if (checkboxTipoValor) {
            checkboxTipoValor.checked = true;
            
            // Disparar o evento 'change' para garantir que a página reaja
            const eventoChange = new Event('change', { bubbles: true });
            checkboxTipoValor.dispatchEvent(eventoChange);
            
            // Marcar o input 'formulario:tipoDeIndiceDeCorrecao:1' após 1 segundo
            setTimeout(() => {
              const inputIndiceDeCorrecao = document.getElementById('formulario:tipoDeIndiceDeCorrecao:1');
              if (inputIndiceDeCorrecao) {
                inputIndiceDeCorrecao.checked = true;
  
                // Disparar o evento 'change' para garantir que a página reaja
                const eventoChangeIndice = new Event('change', { bubbles: true });
                inputIndiceDeCorrecao.dispatchEvent(eventoChangeIndice);
                
                // Selecionar a opção 'SEM_CORRECAO' no <select> após mais 1 segundo
                setTimeout(() => {
                  const selectIndiceDeCorrecao = document.getElementById('formulario:outroIndiceDeCorrecao');
                  if (selectIndiceDeCorrecao) {
                    selectIndiceDeCorrecao.value = 'SEM_CORRECAO';
                    
                    // Disparar o evento 'change' para garantir que a página reaja
                    const eventoChangeSelect = new Event('change', { bubbles: true });
                    selectIndiceDeCorrecao.dispatchEvent(eventoChangeSelect);
                    
                    // Inserir a informação do localStorage no campo de data após mais 1 segundo
                  
                      const inputDataVencimento = document.getElementById('formulario:dataVencimentoInputDate');
                      if (inputDataVencimento) {
                        const dataInserida = localStorage.getItem('dataInserida');
                        if (dataInserida) {
                          inputDataVencimento.value = dataInserida;
  
                          // Disparar o evento 'change' para garantir que a página reaja
                          const eventoChangeData = new Event('change', { bubbles: true });
                          inputDataVencimento.dispatchEvent(eventoChangeData);
                          
                          // Verificar o <select> e escolher a última opção após mais 1 segundo
                         
                            const selectCredores = document.getElementById('formulario:selecaoCredores');
                            if (selectCredores) {
                              const options = selectCredores.getElementsByTagName('option');
                              if (options.length > 1) {
                                selectCredores.value = options[options.length - 1].value;
                                
                                // Disparar o evento 'change' para garantir que a página reaja
                                const eventoChangeSelectCredores = new Event('change', { bubbles: true });
                                selectCredores.dispatchEvent(eventoChangeSelectCredores);
                              }
                            }
                            
                            // Focar no input 'formulario:valor' após mais 1 segundo
                            
                              const inputValor = document.getElementById('formulario:valor');
                              if (inputValor) {
                                inputValor.focus();
                              }                                                     
                        }
                      }                   
                  }
                }, 300); // Atraso de 1 segundo para selecionar a opção
              }
            }, 300); // Atraso de 1 segundo para marcar o input 'formulario:tipoDeIndiceDeCorrecao:1'
          }

          // Parar a verificação após encontrar o input marcado
          clearInterval(intervalo);
        }
      }
  
      // Configura um intervalo para verificar o estado do input a cada 500ms
      const intervalo = setInterval(verificarInput, 500);
    }
  }
  
  // Aguardar 2 segundos antes de iniciar o script
  setTimeout(iniciarObservador, 2000);
  