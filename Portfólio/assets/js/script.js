function loopDigitacao() {
    const frase = "Front-end Developer ";
    const elementoFrase = document.getElementById('fraseDigitada');
    let index = 0;

    function escreverFrase() {
        elementoFrase.textContent += frase.charAt(index);
        index++;

        if (index >= frase.length) {
            setTimeout(apagarFrase, 100); // Tempo de espera após a digitação completa
        } else {
            setTimeout(escreverFrase, 100); // Tempo entre cada caractere digitado
        }
    }

    function apagarFrase() {
        if (elementoFrase.textContent.length > 0) {
            elementoFrase.textContent = elementoFrase.textContent.slice(0, -1);
            setTimeout(escreverFrase, 100); // Tempo entre cada caractere apagado
        } else {
            setTimeout(loopDigitacao, 100); // Tempo de espera após apagar a frase completa
        }
    }

    escreverFrase(); // Inicia o processo de digitação
}

// Inicia o loop infinito
loopDigitacao();