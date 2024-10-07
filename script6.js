
  // Cria botão para lembrete "CALC PRONTO"

  // Função fornecida
function manipularEvento(t) {
    if (!(t = t || e.event)) return;
    const n = this || t.target || e,
      o = n[x[t.type].false];
    if (o)
      if (1 === o.length) p(o[0], n, t);
      else {
        const e = o.slice();
        for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++) p(e[o], n, t);
      }
  }

  // Função para adicionar um botão estilizado à div
  function adicionarBotaoEstilizado() {
      // Cria um elemento de botão
      var button = document.createElement("button");
      // Adiciona classes de estilo ao botão
      button.className = "meu-botao-estilizado";
      // Define o texto do botão
      button.innerText = "Lembr";
  
      // Estilo do botão
      button.style.backgroundColor = "rgb(149, 31, 31)"; // Cor de fundo padrão
      button.style.border = "none"; // Sem borda
      button.style.color = "white"; // Cor do texto
      button.style.padding = "8px 8px"; // Preenchimento
      button.style.textAlign = "center"; // Alinhamento de texto
      button.style.textDecoration = "none"; // Sem decoração de texto
      button.style.fontSize = "16px"; // Tamanho da fonte
      button.style.borderRadius = "15px"; // Borda arredondada
      button.style.fontWeight = "bold"; // Texto em negrito
      button.style.cursor = "pointer"; // Cursor de mãozinha
  
      // Estilo de hover do botão
      button.addEventListener("mouseenter", function() {
          button.style.backgroundColor = "rgb(100, 20, 20)"; // Mudar cor de fundo no hover
      });
      button.addEventListener("mouseleave", function() {
          button.style.backgroundColor = "rgb(149, 31, 31)"; // Restaurar cor de fundo padrão
      });
  
      // Adiciona um event listener para lidar com o clique no botão
      button.addEventListener("click", function() {
          // Chama a função para acessar o link
          acessarLink();
      });
  
      // Seleciona a div 'cabecalho-conteudo'
      var cabecalhoConteudoDiv = document.querySelector('.cabecalho-conteudo');
      // Verifica se a div foi encontrada
      if (cabecalhoConteudoDiv) {
          // Insere o botão dentro da div
          cabecalhoConteudoDiv.appendChild(button);
      }
  }
  
  // Função para acessar o link após 2 segundos
  function acessarLink() {
      // Seleciona o link
      var link = document.querySelector('a[maispje-tooltip-abaixo="Lembretes"]');
      // Verifica se o link foi encontrado
      if (link) {
          // Simula um clique no link
          link.click();
  
          // Aguarda 1 segundo antes de preencher o input
          setTimeout(function() {
              // Seleciona o input
              var input = document.getElementById('tituloPostit');
              // Verifica se o input foi encontrado
              if (input) {
                  // Preenche o input com a informação "CALC PRONTO"
                  input.value = 'CALC PRONTO';
  
                  // Chama a função para reagir após definir o valor do input
                  reagirAposInput();
  
                  // Aguarda mais 1 segundo antes de inserir a informação no textarea
                  setTimeout(function() {
                      var textarea = document.getElementById('conteudoPostit');
                      if (textarea) {
                          var dataAtual = new Date().toLocaleDateString();
                          textarea.value = 'Conectividade em ' + dataAtual + '.';
  
                          // Chama a função para reagir após definir o valor do textarea
                          reagirAposTextarea();
  
                          // Posiciona o cursor no final do textarea
                          textarea.focus();
                          textarea.setSelectionRange(textarea.value.length, textarea.value.length);
                      }
                  }, 1000);
              }
          }, 2000);
      }
  }
  
  // Função chamada após definir o valor do input
  function reagirAposInput() {
      // Exemplo de reação: Exibir uma mensagem no console
      console.log("O valor do input foi definido como 'CALC PRONTO'.");
  
      // Seleciona o input
      var input = document.getElementById('tituloPostit');
      if (input) {
          // Remove a classe ng-pristine
          input.classList.remove('ng-pristine');
          // Adiciona a classe ng-dirty
          input.classList.add('ng-dirty');
      }
  
      // Você pode adicionar outras ações aqui, como manipulação do DOM ou chamadas a APIs
  }
  
  // Função chamada após definir o valor do textarea
  function reagirAposTextarea() {
      // Exemplo de reação: Exibir uma mensagem no console
      console.log("O valor do textarea foi definido.");
  
      // Seleciona o textarea
      var textarea = document.getElementById('conteudoPostit');
      if (textarea) {
          // Remove a classe ng-pristine
          textarea.classList.remove('ng-pristine');
          // Adiciona a classe ng-dirty
          textarea.classList.add('ng-dirty');
      }
  
      // Você pode adicionar outras ações aqui, como manipulação do DOM ou chamadas a APIs
  }
  
  // Função para verificar se a URL começa com o prefixo especificado
  function urlComecaCom(prefixo) {
      return window.location.href.startsWith(prefixo);
  }
  
  // Aguarda 2 segundos antes de executar as instruções
  setTimeout(function() {
      // Verifica se a URL corresponde ao padrão desejado
      if (urlComecaCom("https://pje.trt1.jus.br/pjekz/processo")) {
          // Adiciona o botão após 2 segundos
          setTimeout(function() {
              adicionarBotaoEstilizado();
              
              // Executa a função fornecida 1 segundo após todas as instruções
              setTimeout(function() {
                  manipularEvento(); // Chama a função fornecida
              }, 1000);
          }, 2000);
      }
  }, 2000);
  