// Getting the Input Box
var valInput = document.querySelector('.scInput');

// Getting the music component
var music = document.querySelector('.music');

setInterval(() => {
    music.play();
}, 300);

function navBack() {
    location.replace("../index.html");
}

function addSin() {
    valInput.value = Math.sin(parseInt(valInput.value) * Math.PI / 180);
}

function addCos() {
    valInput.value = Math.cos(parseInt(valInput.value) * Math.PI / 180);
}

function addTan() {
    valInput.value = Math.tan(parseInt(valInput.value) * Math.PI / 180);
}

function addCosec() {
    valInput.value = 1 / Math.sin(parseInt(valInput.value) * Math.PI / 180);
}

function addSec() {
    valInput.value = 1 / Math.cos(parseInt(valInput.value) * Math.PI / 180);
}

function addCot() {
    valInput.value = 1 / Math.tan(parseInt(valInput.value) * Math.PI / 180);
}

function addNumText(innerMultiText) {
    valInput.value = valInput.value + innerMultiText;
}

function clearText() {
    valInput.value = "";
}