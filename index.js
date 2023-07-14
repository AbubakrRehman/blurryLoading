const loading__text = document.getElementById("loading__text");
currentLoadValue = 0;
const timer = setInterval(writeLoadingText, 30);



function writeLoadingText() {
    currentLoadValue++;

    if (currentLoadValue > 99) {
        clearInterval(timer);
    }

    loading__text.innerText = `${currentLoadValue}%`;
}