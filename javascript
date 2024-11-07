// script.js
document.addEventListener('DOMContentLoaded', function() {
    const totalIcons = 100; // Número de ícones
    const body = document.body;

    for (let i = 0; i < totalIcons; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon');
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.animationDuration = `${Math.random() * 3 + 2}s`;
        icon.style.setProperty('--random-x', Math.random() * 10 - 5);
        body.appendChild(icon);
    }
});
