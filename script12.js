// Remove chips e atividade contadoria + ee - 2 (botão)

// Função para adicionar o botão e realizar as ações após um atraso de 4 segundos
function adicionarBotaoComAtraso() {
    // Crie um botão
    var button = document.createElement("button");
    button.innerHTML = "sem chips";

    // Adicione um evento de clique ao botão
    button.onclick = function() {
        // Chame as funções definidas no script11.js
        clicarBotaoHomologar();
        setTimeout(clicarBotaoAguardarContadoria, 500); // Aguarda 0,5 segundo antes de clicar em "Remover Chip Cálculo - aguardar contadoria"
        setTimeout(clicarBotaoExcluirAtividade, 1300); // Aguarda 1,3 segundo antes de clicar em "Excluir Atividade"
        setTimeout(clicarBotaoExcluirAtividade2, 1300); // Aguarda 1,3 segundo antes de clicar em "Excluir Atividade"
    };

    // Selecione a seção onde deseja inserir o botão
    var section = document.querySelector("section[role='group'][aria-label='Ações do processo']");

    // Estilo para posicionar o botão com margem
    button.style.position = "relative";
    button.style.right = "1%"; // Ajuste a posição horizontal conforme necessário
    button.style.top = "9%"; // Ajuste a posição vertical conforme necessário

    // Estilize o botão
    button.style.padding = "1px 16px";
    button.style.height = "80%";
    button.style.border = "medium";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#EDE218"; 
    button.style.color = "black";
    button.style.fontWeight = "bold"; // Fonte em negrito
    button.style.fontSize = "14px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
    button.style.outline = "1px solid gray"; // Adiciona uma outline
    

    // Adicione um efeito de hover para alterar a cor de fundo ao passar o mouse
    button.addEventListener("mouseenter", function() {
        button.style.backgroundColor = "#E1D96B"; // Cor de fundo amarela mais clara ao passar o mouse
    });

    button.addEventListener("mouseleave", function() {
        button.style.backgroundColor = "#EDE218"; // Retorna à cor original ao retirar o mouse
    });

    // Insira o botão antes do botão de menu na seção
    var botaoMenu = section.querySelector("#botao-menu");
    section.insertBefore(button, botaoMenu);
}

// Verifique se o usuário está na URL correta antes de adicionar o botão após um atraso de 4 segundos
if (window.location.href.startsWith("https://pje.trt1.jus.br/pjekz/processo")) {
    setTimeout(adicionarBotaoComAtraso, 1000); // Atraso de 4 segundos
}



