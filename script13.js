// Ajeita formatação na página "Anexar documentos"

// Função para remover o parâmetro text-indent
function removerTextIndent(paragrafo) {
    paragrafo.style.removeProperty('text-indent');
}

// Função para remover o parâmetro text-indent de todos os parágrafos com a classe "corpo" e alinhados ao centro
function removerTextIndentParaTodos() {
    // Seleciona a div com a classe "area-conteudo"
    var divConteudo = document.querySelector('.area-conteudo');

    // Se a div for encontrada
    if (divConteudo) {
        // Seleciona todos os elementos <p> com a classe "corpo" dentro da div
        var paragrafos = divConteudo.querySelectorAll('p.corpo');

        // Para cada parágrafo encontrado
        paragrafos.forEach(function(paragrafo) {
            // Verifica se o texto está alinhado ao centro<p
            if (paragrafo.style.textAlign === 'center') {
                // Remove o parâmetro text-indent
                removerTextIndent(paragrafo);
            }
        });
    }
}

// Função para observar adições de elementos à div indicada
function observarAdicoes() {
    // Seleciona a div com a classe "area-conteudo"
    var divConteudo = document.querySelector('.area-conteudo');

    // Se a div for encontrada
    if (divConteudo) {
        // Cria um observador de mutação
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Verifica se foram adicionados nós
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        // Se o nó adicionado for um parágrafo com a classe "corpo" e alinhado ao centro
                        if (node.tagName === 'P' && node.classList.contains('corpo') && node.style.textAlign === 'center') {
                            // Remove o parâmetro text-indent
                            removerTextIndent(node);
                        }
                    });
                }
            });
        });

        // Configura as opções do observador
        var config = { childList: true, subtree: true };

        // Inicia a observação na div de conteúdo
        observer.observe(divConteudo, config);
    }
}

// Verifica se o usuário está na URL desejada
if (window.location.href.startsWith('https://pje.trt1.jus.br/pjekz/processo')) {
    // Adia a execução do código por 1 segundo
    setTimeout(function() {
        // Remove o parâmetro text-indent dos parágrafos existentes
        removerTextIndentParaTodos();
        
        // Observa adições de elementos para remover o parâmetro text-indent dos novos parágrafos
        observarAdicoes();
    }, 2000);
}