// script.js
function changeColor() {
    const colors = ['#ff6347', '#4caf50', '#ffd700', '#00ced1', '#9370db'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}