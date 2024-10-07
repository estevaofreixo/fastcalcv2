// Insere a data limite na verba IDENIZAÇÃO POR DANO MORAL

// Define a variável dataTerminoCalculo para armazenar o valor recuperado do localStorage
let dataTerminoCalculo = localStorage.getItem("dataTerminoCalculo");

// Função para verificar a URL, o conteúdo do input e preencher os inputs
function verificarURLConteudoInput() {
  // Verifica se a URL atual inicia com "https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation"
  if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/verba/verba-calculo.jsf?conversation")) {
    // Verifica se o input "formulario:descricao" contém o conteúdo "INDENIZAÇÃO POR DANO MORAL"
    const descricaoInput = document.getElementById("formulario:descricao");
    if (descricaoInput.value === "INDENIZAÇÃO POR DANO MORAL") {
      // Limpa os inputs "periodoInicialInputDate" e "periodoFinalInputDate" com um atraso de 0,5 segundo
      const periodoInicialInput = document.getElementById("formulario:periodoInicialInputDate");
      const periodoFinalInput = document.getElementById("formulario:periodoFinalInputDate");

      setTimeout(() => {
        periodoInicialInput.value = "";
        periodoFinalInput.value = "";
      }, 500);

      // Preenche os inputs com a variável dataTerminoCalculo após 1 segundo
      setTimeout(() => {
        periodoInicialInput.value = dataTerminoCalculo;
        periodoFinalInput.value = dataTerminoCalculo;
      }, 1000);
    }
  }
}

// Aguarda 2 segundos antes de executar a função verificarURLConteudoInput
setTimeout(verificarURLConteudoInput, 2000);
