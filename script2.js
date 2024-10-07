// Ajeita a formatação de tabelas coladas na página "Anexar documentos"

function stylePastedContent() {
    var areaConteudo = document.querySelector('.area-conteudo.ck');
    if (areaConteudo) {
        areaConteudo.addEventListener('paste', function(event) {
            setTimeout(function() {
                
                // Seleciona todos os parágrafos dentro de uma tabela
                var pastedContent = areaConteudo.querySelectorAll('table p');
                pastedContent.forEach(function(paragraph) {
                    // Aplica o estilo textIndent apenas aos parágrafos dentro da tabela
                    paragraph.style.textIndent = '0';
                    // Verifica se o texto está centralizado e remove o text-indent se estiver
                    if (paragraph.style.textAlign === 'center') {
                        paragraph.style.textIndent = '';
                    }
                });
                
                // Clique no botão "Salvar" após colar o conteúdo
                var saveButton = document.querySelector('button[aria-label="Salvar"]');
                if (saveButton) {
                    saveButton.click();
                }
            }, 0);
        });
    }
}


// Função para verificar se a página acessada começa ou termina com "https://pje.trt1.jus.br/pjekz/processo"
function checkPage() {
    var currentUrl = window.location.href;
    if (currentUrl.startsWith("https://pje.trt1.jus.br/pjekz/processo") || currentUrl.endsWith("/minutar")) {
        // Adicionar um atraso de 2 segundos antes de estilizar o conteúdo colado
        setTimeout(stylePastedContent, 2000);
    } else {
        console.log("Esta página não começa ou termina com https://pje.trt1.jus.br/pjekz/processo ou /minutar.");
    }
}

// Função para inicializar a extensão e garantir que as funções permaneçam ativas após a atualização da página
function initializeExtension() {
    // Verificar se a página acessada começa ou termina com https://pje.trt1.jus.br/pjekz/processo ou /minutar
    checkPage();   
}

// Inicializar a extensão
initializeExtension();

// Adicionar botão no cabeçalho "Anexar Documentos"
setTimeout(function() {
    var cabecalhoCard = document.querySelector('.cabecalho-card');
    if (cabecalhoCard) {
        var botao = document.createElement('button');
        botao.textContent = 'Tabelas';        
        botao.addEventListener('click', function() {
            // Redirecionar para a página "tabelas.html" ao clicar no botão
            window.open('https://estevaofreixo.github.io/tabela/', '_blank');
        });        

        // Estilizando o botão diretamente no JavaScript
        botao.style.backgroundColor = '#087cac';
        botao.style.border = 'none';
        botao.style.color = 'white';
        botao.style.padding = '8px 25px';
        botao.style.marginTop = "10px";
        botao.style.marginLeft = "30px";
        botao.style.marginBottom = "2px";
        botao.style.fontWeight = "bold";
        botao.style.textAlign = 'center';
        botao.style.textDecoration = 'none';
        botao.style.display = 'inline-block';
        botao.style.fontSize = '16px';        
        botao.style.cursor = 'pointer';
        botao.style.borderRadius = '10px';
        botao.style.float = 'left';
                
        
        // Obtendo o elemento <h1>
        var h1AnexarDocumentos = document.querySelector('h1');

        // Inserindo o botão antes do <h1>
        cabecalhoCard.insertBefore(botao, h1AnexarDocumentos);
                
    }
}, 2000); // 2 segundos de atraso



