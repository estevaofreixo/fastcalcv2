// Configura custas no Pjecalc

setTimeout(function() {
    // Verifica se a URL começa com o padrão fornecido
    if (window.location.href.startsWith("https://pje.trt1.jus.br/pjecalc/pages/calculo/custas-judiciais.jsf?conversation")) {
        // Verifica se o primeiro radio button está selecionado
        var primeiroRadio = document.getElementById("formulario:tipoDeCustasDeConhecimentoDoReclamado:1");
        var segundoRadio = document.getElementById("formulario:tipoDeCustasDeConhecimentoDoReclamado:2");
        
        if (primeiroRadio && primeiroRadio.checked) {
            // Seleciona o segundo radio button
            segundoRadio.checked = true;
            // Dispara o evento de mudança no radio button selecionado
            segundoRadio.dispatchEvent(new Event('change'));
            
            // Inclui a data atual no input após 1 segundo
            setTimeout(function() {
                var currentDate = new Date();
                var day = currentDate.getDate();
                var month = currentDate.getMonth() + 1;
                var year = currentDate.getFullYear();
                var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
                
                var inputDate = document.getElementById("formulario:dataVencimentoConhecimentoDoReclamadoInputDate");
                if (inputDate) {
                    inputDate.value = formattedDate;
                }
            }, 500); // 1 segundo de atraso
        } else if (segundoRadio && segundoRadio.checked) {
            // Apaga o conteúdo do input
            var inputDate = document.getElementById("formulario:dataVencimentoConhecimentoDoReclamadoInputDate");
            if (inputDate) {
                inputDate.value = "";                
                // Inclui a data atual no input após 1 segundo
                setTimeout(function() {
                    var currentDate = new Date();
                    var day = currentDate.getDate();
                    var month = currentDate.getMonth() + 1;
                    var year = currentDate.getFullYear();
                    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
                    
                    inputDate.value = formattedDate;

                    

                }, 500); // meio segundo de atraso
                 
            }
           
        }
         // Foco no valor do input após meio segundo de atraso
         setTimeout(function() {
            const valorInput2 = document.getElementById('formulario:valorConhecimentoDoReclamado');
            if (valorInput2) {
                valorInput2.focus(); // Posiciona o cursor no input
            }
        }, 750); // meio segundo de atraso
    }
}, 1000); // 2 segundos de atraso
