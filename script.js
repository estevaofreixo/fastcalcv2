// Botão "Rescisórias no Pjecalc

// Verifica se o script1.js deve continuar atuando
if (window.script1Ativo === undefined || window.script1Ativo) {
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verbas-para-calculo.jsf?conversation")) {

        // Função para executar quando o botão é clicado
        function executeScript() {
            var lista_checkbox_ids = ['formulario\:j_id82\:0\:j_id84\:0\:selecionada','formulario\:j_id82\:0\:j_id84\:1\:selecionada', 'formulario\:j_id82\:17\:j_id84\:0\:selecionada', 'formulario\:j_id82\:15\:j_id84\:1\:selecionada', 'formulario\:j_id82\:22\:j_id84\:1\:selecionada'];
          
            for (var i = 0; i < lista_checkbox_ids.length; i++) {
              var checkbox = document.getElementById(lista_checkbox_ids[i]);
              if (checkbox) {
                checkbox.checked = true;
              } else {
                console.error("Checkbox não encontrado: " + lista_checkbox_ids[i]);
              }
            }
        }
      
        // Criação do botão
        const button = document.createElement("button");
        button.innerHTML = "Rescisórias";
        button.style.position = "absolute"; // Altere para "absolute" para permitir posicionamento relativo ao documento
        button.style.top = "350px"; // Posição vertical em relação ao topo
        button.style.left = "1000px"; // Posição horizontal em relação à esquerda
        button.style.padding = "20px";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "#fff";
        button.style.fontFamily = "Arial, sans-serif";
        button.style.fontSize = "18px";
        button.style.textAlign = "center"; 
        button.style.lineHeight = "normal"; 
        button.style.lineHeight = button.offsetHeight + "px";
        button.style.cursor = "pointer";
        button.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
        button.style.transition = "background-color 0.3s";
      
        // Altera a cor de fundo quando o cursor passa sobre o botão
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#0056b3";
        });
      
        // Retorna à cor de fundo original quando o cursor deixa o botão
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#007bff";
        });
      
        // Função para atualizar a posição do botão conforme a página é rolada
        function updateButtonPosition() {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const buttonHeight = button.offsetHeight;
            const buttonBottomMargin = 20; // Margem inferior do botão em relação à borda inferior da janela
      
            // Calcula a posição vertical do botão
            const buttonY = windowHeight - buttonHeight - buttonBottomMargin + scrollY;
      
            // Define a posição vertical do botão
            button.style.bottom = buttonY + "px";
        }
      
        // Atualiza a posição do botão quando a página é carregada ou rolada
        window.addEventListener("load", updateButtonPosition);
        window.addEventListener("scroll", updateButtonPosition);
      
        // Adicionando o botão ao corpo da página
        document.body.appendChild(button);
      
        // Adicionando um evento de clique ao botão
        button.addEventListener("click", executeScript);
      
    }
}
