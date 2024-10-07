

// Função para iniciar a transcrição de voz
function iniciarTranscricao() {
    // Verifica se o navegador suporta a API de reconhecimento de voz
    if ('webkitSpeechRecognition' in window) {
        // Cria uma instância do objeto de reconhecimento de voz
        var recognition = new webkitSpeechRecognition();

        // Configuração do reconhecimento de voz
        recognition.lang = 'pt-BR'; // Define o idioma como português do Brasil

        // Evento de resultado do reconhecimento de voz
        recognition.onresult = function(event) {
            // Obtém a transcrição da fala reconhecida
            var transcrição = event.results[0][0].transcript;

            // Insere a transcrição no campo de texto
            var campoTexto = document.getElementById('campoTexto');
            campoTexto.value += transcrição;
        };

        // Inicia o reconhecimento de voz
        recognition.start();
    } else {
        // Se o navegador não suporta a API de reconhecimento de voz, exibe uma mensagem de erro
        alert('Seu navegador não suporta a transcrição de voz.');
    }
}

// Adiciona um evento de clique ao botão para iniciar a transcrição de voz
document.getElementById('startButton').addEventListener('click', iniciarTranscricao);

/*

const startButton = document.getElementById('startButton');
const transcriptionOutput = document.getElementById('campoTexto');

let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.continuous = true;
recognition.interimResults = true;

// Função para posicionar o cursor
function setEndOfContenteditable(contentEditableElement) {
    let range, selection;
    if (document.createRange) { // Firefox, Chrome, Opera, Safari, IE 9+
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection) { // IE 8 and lower
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}

recognition.onresult = (event) => {
    let interimTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            let transcript = event.results[i][0].transcript;
            const lastChar = transcriptionOutput.textContent.trim().slice(-1); // Remover espaços em branco antes de obter o último caractere
            const isTranscriptionEmpty = transcriptionOutput.textContent.trim() === '';
            const isTranscriptionAfterBreak = transcriptionOutput.innerHTML.endsWith('<br>');
            if (lastChar === '.' || isTranscriptionEmpty || isTranscriptionAfterBreak) {
                transcript = " " + transcript.charAt(1).toUpperCase() + transcript.slice(2); // Primeira letra maiúscula
            }
            transcriptionOutput.innerHTML += transcript + ' ';
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    // Não adicionamos o interimTranscript, pois ele pode conter repetições

    // Posicionar o cursor no final
    setEndOfContenteditable(transcriptionOutput);
};

startButton.addEventListener('click', () => {
    recognition.start();
});

// Função para detectar a tecla Enter
transcriptionOutput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        
        transcriptionOutput.innerHTML += '<br>';  // Insere uma quebra de linha (tag <br> correta)
        // Posicionar o cursor no final após a quebra de linha
        setEndOfContenteditable(transcriptionOutput); 
    }
});

*/