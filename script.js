document.addEventListener('DOMContentLoaded', () => {
    const menuCheckbox = document.getElementById('label-check');
    const closeButton = document.querySelector('.close-menu');

    closeButton.addEventListener('click', () => {
        menuCheckbox.checked = false; // Uncheck the menu checkbox to close the menu
    });
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '/' && value !== '*' && value !== '-' && value !== '+' && value !== '(') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    playClickSound();
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    playClickSound();
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText;

    // Replace ^ with ** for exponentiation
    expression = expression.replace(/\^/g, '**');

    // Handle sqrt
    expression = expression.replace(/sqrt\((.*?)\)/g, 'Math.sqrt($1)');

    // Handle log
    expression = expression.replace(/log\((.*?)\)/g, 'Math.log($1)');

    // Handle trigonometric functions
    expression = expression.replace(/sin\((.*?)\)/g, 'Math.sin($1 * Math.PI / 180)');
    expression = expression.replace(/cos\((.*?)\)/g, 'Math.cos($1 * Math.PI / 180)');
    expression = expression.replace(/tan\((.*?)\)/g, 'Math.tan($1 * Math.PI / 180)');

    try {
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
    playClickSound();
}

function playClickSound() {
    const sound = document.getElementById('click-sound');
    sound.play();
}