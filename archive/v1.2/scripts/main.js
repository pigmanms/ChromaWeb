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
            createSpinningText(userInput, animationContainer);
        }
    }
});

function createSpinningText(text, container) {
    const textElement = document.createElement('div');
    textElement.classList.add('spinningText');
    textElement.innerText = text;
    textElement.style.left = `${Math.random() * 100}%`;
    textElement.style.top = `${Math.random() * 100}%`;
    textElement.style.animationDuration = `${Math.random() * 5 + 1}s`;
    container.appendChild(textElement);
}
