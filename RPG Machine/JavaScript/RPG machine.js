function rpg() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "url('Imagens/imagem\\ lago.png')";

    div_msg.innerHTML = 
        `<style>

            #introducao { 
                display: none; 
            }

            #container {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                border: 3px solid #18a036;
                background-color: rgba(16, 23, 39, 0.8);
                padding: 10px;
                border-radius: 20px;
                margin-bottom: 100px;
            }

            body {
                background-image: url(Imagens/imagem\\ lago.png);
            }

        </style>`;

    // Parar o audio assim que o botão da função for clicado
    const audio = document.getElementById('audio1');
    audio.pause();
}

function converter() {
    const inputValue = document.getElementById('inputValue').value;
    const inputBase = document.getElementById('inputBase').value;

    if (!validarEntrada(inputValue, inputBase)) {
        alert('Por favor, insira um número válido para a base selecionada.');
        return;
    }

    // converte o valor para decimal, com base na base de entrada selecionada
    const decimalValue = parseInt(
        inputValue,
        inputBase === 'hexadecimal' ? 16
            : inputBase === 'octal' ? 8
            : inputBase === 'binario' ? 2
            : 10
    );

    // inicializa a variável para armazenar o html de saída
    let outputHTML = '';

    // verifica se cada opção de conversão está selecionada e adiciona o resultado ao html de saída
    if (document.getElementById('convertDecimal').checked) {
        document.getElementById('output').style.display = 'block';
        outputHTML += `<p><strong>Decimal: ${decimalValue}</strong></p>`;
    }
    if (document.getElementById('convertHexadecimal').checked) {
        document.getElementById('output').style.display = 'block';
        outputHTML += `<p><strong>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</strong></p>`;
    }
    if (document.getElementById('convertOctal').checked) {
        document.getElementById('output').style.display = 'block';
        outputHTML += `<p><strong>Octal: ${decimalValue.toString(8)}</strong></p>`;
    }        
    if (document.getElementById('convertBinario').checked) {
        document.getElementById('output').style.display = 'block';
        outputHTML += `<p><strong>Binário: ${decimalValue.toString(2)}</strong></p>`;
    }

    // atualiza o conteúdo da saída com o html gerado
    document.getElementById('output').innerHTML = outputHTML;
}

function validarEntrada(inputValue, inputBase) {
    let validChars = '';

    // Determina os caracteres válidos com base na base selecionada
    if (inputBase === 'decimal') {
        validChars = '0123456789';
    } else if (inputBase === 'hexadecimal') {
        validChars = '0123456789ABCDEFabcdef';
    } else if (inputBase === 'octal') {
        validChars = '01234567';
    } else if (inputBase === 'binario') {
        validChars = '01';
    }

    // Verifica se cada caractere da entrada está presente na lista de caracteres válidos
    for (let i = 0; i < inputValue.length; i++) {
        if (validChars.indexOf(inputValue[i]) === -1) {
            return false;
        }
    }
    return true;
}