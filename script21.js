// Captura, no Pjecalc, a data limite do cálculo

// Verifica se a URL atual inicia com "https://pje.trt1.jus.br/pjecalc/pages/calculo/calculo.jsf?conversation"
if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/calculo.jsf?conversation")) {
  // Adiciona um delay de 2 segundos (2000 milissegundos) antes de executar o código
  setTimeout(() => {
    // Captura o conteúdo do input com id "formulario:dataTerminoCalculoInputDate"
    const dataTerminoCalculo = document.getElementById("formulario:dataTerminoCalculoInputDate").value;

    // Armazena o conteúdo capturado no localStorage com a chave "dataTerminoCalculo"
    localStorage.setItem("dataTerminoCalculo", dataTerminoCalculo);
  }, 2000);
}
