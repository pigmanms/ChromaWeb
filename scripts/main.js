document.getElementById('startButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        document.getElementById('inputContainer').style.display = 'none';
        document.getElementById('animationContainer').style.display = 'block';
        
        const animationContainer = document.getElementById('animationContainer');
        createSpinningText(userInput, animationContainer);
        
        for (let i = 0; i < 20; i++) {
            createSpinningText(generateRandomText(), animationContainer, true);
        }
    }
});

function createSpinningText(text, container, isSmall = false) {
    const textElement = document.createElement('div');
    textElement.classList.add('spinningText');
    textElement.innerText = text;
    textElement.style.left = `${Math.random() * 100}%`;
    textElement.style.top = `${Math.random() * 100}%`;
    if (isSmall) {
        textElement.style.fontSize = '0.5em';
        textElement.style.animationDuration = '2s';
    }
    container.appendChild(textElement);
}

function generateRandomText() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
