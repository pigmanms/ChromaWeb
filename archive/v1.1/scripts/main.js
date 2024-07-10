document.getElementById('startButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        document.getElementById('inputContainer').style.display = 'none';
        document.getElementById('animationContainer').style.display = 'block';
        
        const mainText = document.getElementById('mainText');
        mainText.innerText = userInput;

        // Create small texts with the same user input string
        const animationContainer = document.getElementById('animationContainer');
        for (let i = 0; i < 20; i++) {
            createSpinningText(userInput, animationContainer, true);
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
