// Preenche o email lista REEF

// Função para verificar e aplicar as alterações
function applyChanges() {
    // Verifica se o usuário está na URL especificada
    if (window.location.href.startsWith("https://mail.google.com/mail/u/0/#inbox")) {
        // Localiza o elemento "Destinatários" pela classe
        var destinatariosDiv = document.querySelector('div.aoD.hl');
        if (destinatariosDiv) {
            var destinatariosInnerDiv = destinatariosDiv.querySelector('div.oL.aDm');
            if (destinatariosInnerDiv && !destinatariosInnerDiv.classList.contains('az9')) {
                // Modifica o conteúdo e estilo do elemento
                destinatariosInnerDiv.classList.add('az9');
                destinatariosInnerDiv.setAttribute('style', '');
                destinatariosInnerDiv.innerHTML = '<span email="reef@trt1.jus.br" data-hovercard-id="reef@trt1.jus.br" data-hovercard-owner-id="23">reef@trt1.jus.br</span>';
            }
        }

         // Localiza o campo "Para" e preenche com o email especificado
        var paraDiv = document.querySelector('div.oj[name="to"].anm[aria-label="Para"]');
        if (paraDiv && paraDiv.innerHTML.trim() === '') {
        paraDiv.innerHTML = 'reef@trt1.jus.br';
        }

        // Localiza o campo de input "Destinatários" e preenche com o email especificado
        var paraInput = document.querySelector('input.agP.aFw[aria-label="Destinatários"]');
        if (paraInput && paraInput.value.trim() === '') {
            paraInput.value = 'reef@trt1.jus.br';
            // Simula um evento de input para que o Gmail reconheça a alteração
            var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            paraInput.dispatchEvent(event);
        }


        // Localiza o campo de texto do corpo da mensagem pela classe
        var corpoMensagemDiv = document.querySelector('div.Am.aiL.Al.editable.LW-avf.tS-tW[aria-label="Corpo da mensagem"]');
        if (corpoMensagemDiv && corpoMensagemDiv.innerHTML.trim() === '<br>') {
            // Preenche o campo com o conteúdo desejado
            corpoMensagemDiv.innerHTML = 'Prezados,<br><br>envio em anexo lista REEF com 1 processo(s) da empresa XXXXXXXXXXXX, acompanhada dos cálculos de atualização.<br><br>Att.,<br>Estêvão Freixo<br>Técnico Judiciário<br>65 VT/RJ';
        }

          // Localiza o campo de assunto e preenche com o texto especificado
          var assuntoInput = document.querySelector('input[name="subjectbox"].aoT[aria-label="Assunto"]');
          if (assuntoInput && assuntoInput.value.trim() === '') {
              assuntoInput.value = 'lista REEF';
              // Simula um evento de input para que o Gmail reconheça a alteração
              var event = new Event('input', {
                  bubbles: true,
                  cancelable: true,
              });
              assuntoInput.dispatchEvent(event);
          }
        
        
        // Verifica se ambas as alterações foram feitas
        if (destinatariosInnerDiv && destinatariosInnerDiv.classList.contains('az9') && 
            corpoMensagemDiv && corpoMensagemDiv.innerHTML.trim() !== '<br>') {
            clearInterval(intervalId); // Para o loop se as alterações foram feitas
        }
    }
}

// Executa a função após 2 segundos e continua tentando a cada segundo
setTimeout(function() {
    var intervalId = setInterval(applyChanges, 500); // Tenta aplicar as mudanças a cada 1 segundo
}, 1000); // 2000 milissegundos = 2 segundos

