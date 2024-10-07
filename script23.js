// Caputra o nome da empresa em localStorage

// Função para obter o conteúdo da seção e redirecionar para o Gmail com parâmetros na URL
function obterConteudoEEnviarParaGmail() {
    // Captura a seção
    var secao = document.querySelector('.partes');
    if (secao) {
        // Obtém o texto dentro da seção
        var textoSecao = secao.textContent;
        // Procura a posição do texto "x"
        var posicaoX = textoSecao.indexOf("x");
        if (posicaoX !== -1) {
            // Captura o conteúdo após o "x"
            var conteudoSecao = textoSecao.substring(posicaoX + 1);
            // Remove "E OUTROS" do conteúdo se estiver presente no final
            if (conteudoSecao.trim().endsWith("E OUTROS")) {
                conteudoSecao = conteudoSecao.slice(0, -8).trim();
            }
            // Codifica o conteúdo para que seja seguro passar pela URL
            var conteudoSecaoCodificado = encodeURIComponent(conteudoSecao.trim());
            // copia o conteúdo armazenado
            
            // Abre uma nova aba com o Gmail e passa os dados como parâmetro na URL
            var novaAba = window.open("https://mail.google.com/mail/u/0/#inbox?compose=new&conteudoSecao=" + conteudoSecaoCodificado, "_blank");
           
        } else {
            console.error("Texto 'x' não encontrado dentro da seção.");
        }
    } else {
        console.error("Seção não encontrada.");
    }
}


// Função para inserir um botão na seção especificada
function inserirBotao() {
    // Verifica se a URL do usuário termina em "detalhe"
    if (window.location.href.endsWith("detalhe")) {
        // Seleciona a seção onde o botão será inserido
        var secao = document.querySelector('section[aria-label="Dados do processo"]');
        
        if (secao) {
            // Cria um contêiner flexível para o botão
            var botaoContainer = document.createElement("div");
            botaoContainer.style.position = "relative"; // Define a posição relativa do contêiner
            
            // Cria um elemento de botão
            var botao = document.createElement("button");
            botao.textContent = "Gmail"; // Texto do botão
            botao.style.backgroundColor = "#087cac"; // Cor de fundo azul
            botao.style.color = "white"; // Cor do texto branca
            botao.style.padding = "7px 25px"; // Espaçamento interno
            botao.style.border = "none"; // Remove a borda
            botao.style.borderRadius = "5px"; // Borda arredondada
            botao.style.cursor = "pointer"; // Cursor de ponteiro ao passar
            
            // Define a posição absoluta do botão para que ele possa ultrapassar o contêiner
            botao.style.position = "absolute";
            botao.style.top = "-10px"; // Ajuste este valor para ultrapassar o limite superior
            botao.style.left = "75%";
            botao.style.transform = "translateX(-50%)"; // Centraliza o botão horizontalmente
            
            // Adiciona um evento de clique ao botão
            botao.addEventListener("click", obterConteudoEEnviarParaGmail);
            
            // Insere o botão no contêiner flexível
            botaoContainer.appendChild(botao);
            
            // Insere o contêiner do botão na seção
            secao.appendChild(botaoContainer);
            
            console.log("Botão inserido na seção.");
        } else {
            console.log("Seção não encontrada.");
        }
    } else {
        console.log("O usuário não está em uma URL que termina com 'detalhe'.");
    }
}


// Chama a função para inserir o botão após 2 segundos
setTimeout(inserirBotao, 2000);

