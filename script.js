let inputDisplay = document.getElementById('inputDisplay');
let outputDisplay = document.getElementById('outputDisplay');
let lastAnswer = 0;

function appendToDisplay(value) {
    if (value === '±') {
        toggleSign();
    } else {
        inputDisplay.innerText += value;
    }
}

function clearDisplay() {
    inputDisplay.innerText = '';
    outputDisplay.innerText = '0';
}

function deleteLast() {
    inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
}

function getAnswer() {
    inputDisplay.innerText += lastAnswer;
}

function calculateResult() {
    let expression = inputDisplay.innerText
        .replace('×', '*')
        .replace('÷', '/')
        .replace('√', 'Math.sqrt');

    try {
        let result = eval(expression);
        outputDisplay.innerText = result;
        lastAnswer = result;
    } catch (error) {
        outputDisplay.innerText = 'Error';
    }
}

function toggleSign() {
    if (inputDisplay.innerText) {
        inputDisplay.innerText = inputDisplay.innerText.startsWith('-')
            ? inputDisplay.innerText.slice(1)
            : '-' + inputDisplay.innerText;
    }
}