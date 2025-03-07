const techColors = [
    '#1e90ff', 
    '#32cd32',
    '#6a5acd', 
    '#00fa9a', 
    '#00ffff', 
    '#00008b', 
    '#4682b4', 
    '#2f4f4f',
    '#ff6347', 
    '#8a2be2'  
];

function getRandomTechColor() {
    return techColors[Math.floor(Math.random() * techColors.length)];
}

function changeButtonColor(button) {
    setInterval(() => {
        const randomColor = getRandomTechColor();
        button.style.backgroundColor = randomColor;
        button.style.boxShadow = `0 0 10px ${randomColor}`;
    }, 1000); 
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    changeButtonColor(button);
    
});