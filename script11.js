// Remove chips e atividade contadoria + ee - 1

// Função para clicar em todos os botões "Sim" e aguardar a abertura do mat-dialog-container
function clicarBotaoSim() {
    return new Promise((resolve, reject) => {
        // Procura todos os botões "Sim" dentro do mat-dialog-container
        var botoesSim = document.querySelectorAll('.mat-dialog-container button.mat-primary');

        // Verifica se há botões "Sim" encontrados
        if (botoesSim.length > 0) {
            // Itera sobre todos os botões encontrados e simula o clique em cada um
            botoesSim.forEach((botaoSim) => {
                botaoSim.click();
            });
            // Resolve a promessa para indicar que todos os botões foram clicados
            resolve();
        } else {
            console.error('Nenhum botão "Sim" encontrado dentro do mat-dialog-container.');
            // Rejeita a promessa se nenhum botão for encontrado
            reject();
        }
    });
}

// Função para clicar no botão "Remover Chip Cálculo - homologar" e depois clicar em todos os botões "Sim"
function clicarBotaoHomologar() {
    // Obtém uma referência para os botões "Remover Chip Cálculo - homologar"
    var botoesHomologar = document.querySelectorAll('.etq-botao-excluir[aria-label="Remover Chip Cálculo - homologar"]');

    // Verifica se os botões foram encontrados
    if (botoesHomologar.length > 0) {
        // Itera sobre os botões
        botoesHomologar.forEach(function(botao) {
            // Simula o clique no botão "Remover Chip Cálculo - homologar"
            botao.click();
            
            // Espera pela abertura do mat-dialog-container e clica em todos os botões "Sim"
            setTimeout(function() {
                clicarBotaoSim()
                .then(() => {
                    // Ação adicional após o clique em todos os botões "Sim", se necessário
                    console.log('Botão "Sim" clicado após Remover Chip Cálculo - homologar');
                })
                .catch(() => {
                    console.error('Falha ao clicar no botão "Sim" após Remover Chip Cálculo - homologar');
                });
            }, 500); // Espera 0,5 segundo (500 milissegundos) antes de procurar pelos botões "Sim"
        });
    } else {
        console.error('Botões "Remover Chip Cálculo - homologar" não encontrados.');
    }
}

// Função para clicar no botão "Remover Chip Cálculo - aguardar contadoria" e depois clicar em todos os botões "Sim"
function clicarBotaoAguardarContadoria() {
    // Obtém uma referência para os botões "Remover Chip Cálculo - aguardar contadoria"
    var botoesAguardarContadoria = document.querySelectorAll('.etq-botao-excluir[aria-label="Remover Chip Cálculo - aguardar contadoria"]');

    // Verifica se os botões foram encontrados
    if (botoesAguardarContadoria.length > 0) {
        // Itera sobre os botões
        botoesAguardarContadoria.forEach(function(botao) {
            // Simula o clique no botão "Remover Chip Cálculo - aguardar contadoria"
            botao.click();
            
            // Espera pela abertura do mat-dialog-container e clica em todos os botões "Sim"
            setTimeout(function() {
                clicarBotaoSim()
                .then(() => {
                    // Ação adicional após o clique em todos os botões "Sim", se necessário
                    console.log('Botão "Sim" clicado após Remover Chip Cálculo - aguardar contadoria');
                })
                .catch(() => {
                    console.error('Falha ao clicar no botão "Sim" após Remover Chip Cálculo - aguardar contadoria');
                });
            }, 500); // Espera 0,5 segundo (500 milissegundos) antes de procurar pelos botões "Sim"
        });
    } else {
        console.error('Botões "Remover Chip Cálculo - aguardar contadoria" não encontrados.');
    }
}

// Função para clicar no botão "Excluir Atividade" e depois clicar em todos os botões "Sim"
function clicarBotaoExcluirAtividade() {
    // Localiza todos os elementos <tr> dentro da página
    var linhas = document.querySelectorAll('tr');

    // Itera sobre cada linha encontrada
    linhas.forEach(function(linha) {
        // Verifica se a linha contém o texto "Contadoria" ou "MBARGOS À EXECUÇÃO"
        if (linha.textContent.includes('Contadoria') || linha.textContent.includes('MBARGOS À EXECUÇÃO')) {
            // Procura pelo botão dentro da linha
            var botaoExcluirAtividade = linha.querySelector('td.pull-right i[aria-label="Excluir Atividade"]');
            
            // Verifica se o botão foi encontrado
            if (botaoExcluirAtividade) {
                // Simula o clique no botão "Excluir Atividade"
                botaoExcluirAtividade.click();
                
                // Espera pela abertura do mat-dialog-container e clica em todos os botões "Sim"
                setTimeout(function() {
                    clicarBotaoSim()
                    .then(() => {
                        // Ação adicional após o clique em todos os botões "Sim", se necessário
                        console.log('Botão "Sim" clicado após Excluir Atividade');
                    })
                    .catch(() => {
                        console.error('Falha ao clicar no botão "Sim" após Excluir Atividade');
                    });
                }, 500); // Espera 0,5 segundo (500 milissegundos) antes de procurar pelos botões "Sim"
            } else {
                console.error('Botão "Excluir Atividade" não encontrado dentro da linha.');
            }
        }
    });
}

// Função para clicar no botão "Excluir Atividade" e depois clicar em todos os botões "Sim" - ALVARÁS
function clicarBotaoExcluirAtividade2() {
    // Localiza todos os elementos <tr> dentro da página
    var linhas = document.querySelectorAll('tr');

    // Itera sobre cada linha encontrada
    linhas.forEach(function(linha) {
        // Verifica se a linha contém o texto "alvará"
        if (/alvará/i.test(linha.textContent)) {
            // Procura pelo botão dentro da linha
            var botaoExcluirAtividade = linha.querySelector('td.pull-right i[aria-label="Excluir Atividade"]');
            
            // Verifica se o botão foi encontrado
            if (botaoExcluirAtividade) {
                // Simula o clique no botão "Excluir Atividade"
                botaoExcluirAtividade.click();
                
                // Espera pela abertura do mat-dialog-container e clica em todos os botões "Sim"
                setTimeout(function() {
                    clicarBotaoSim()
                    .then(() => {
                        // Ação adicional após o clique em todos os botões "Sim", se necessário
                        console.log('Botão "Sim" clicado após Excluir Atividade');
                    })
                    .catch(() => {
                        console.error('Falha ao clicar no botão "Sim" após Excluir Atividade');
                    });
                }, 500); // Espera 0,5 segundo (500 milissegundos) antes de procurar pelos botões "Sim"
            } else {
                console.error('Botão "Excluir Atividade" não encontrado dentro da linha.');
            }
        }
    });
}

// Adicione um ouvinte de evento de clique ao botão inserido pelo script12.js
document.addEventListener('DOMContentLoaded', function() {
    var botaoSemChips = document.querySelector("button"); // Seleciona o botão inserido pelo script12.js
    botaoSemChips.addEventListener('click', function() {
        // Chame as funções definidas neste script apenas quando o botão "sem chips" for clicado
        clicarBotaoHomologar();
        setTimeout(clicarBotaoAguardarContadoria, 500); // Aguarda 0,5 segundo antes de clicar em "Remover Chip Cálculo - aguardar contadoria"
        setTimeout(clicarBotaoExcluirAtividade, 500); // Aguarda 0,5 segundo antes de clicar em "Excluir Atividade"
        setTimeout(clicarBotaoExcluirAtividade2, 500); // Aguarda 0,5 segundo antes de clicar em "Excluir Atividade"
    });
});
