// Marca último check box na verba 13º salário - PjeCalc

// Função para verificar se a URL da página corresponde ao padrão desejado
function checkUrl() {
    const url = window.location.href;
    return url.startsWith('https://pje.trt1.jus.br/pjecalc/pages/calculo/parametrizar-ocorrencia.jsf?conversation');
}

// Função para verificar se o elemento <label> com o texto "13º SALÁRIO" ou "FÉRIAS + 1/3" está presente
function checkLabel() {
    const labels = document.querySelectorAll('label.labelOcorrencia');
    return Array.from(labels).some(label => {
        const text = label.textContent.trim();
        return text === '13º SALÁRIO' || text === 'FÉRIAS + 1/3';
    });
}

// Função para verificar se todos os checkboxes com IDs que seguem o padrão "formulario:listagem:n:ativo" estão marcados
function checkAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="formulario:listagem"][id$=":ativo"]');
    return Array.from(checkboxes).every(checkbox => checkbox.checked);
}

// Função para desmarcar todos os checkboxes, exceto o último
function updateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="formulario:listagem"][id$=":ativo"]');
    if (checkboxes.length > 0) {
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = (index === checkboxes.length - 1);
        });
    }
}

// Função principal que será executada após 2 segundos
function main() {
    if (checkUrl()) {
        if (checkLabel()) {
            if (checkAllCheckboxes()) {
                updateCheckboxes();
            }
        }
    }
}

// Executar a função principal após 2 segundos
setTimeout(main, 500);
