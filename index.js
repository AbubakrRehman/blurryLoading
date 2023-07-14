const loading__text = document.getElementById("loading__text");
const background = document.getElementById("bg");
currentLoadValue = 0;
const timer = setInterval(writeLoadingText, 30);



function writeLoadingText() {
    currentLoadValue++;

    if (currentLoadValue > 99) {
        clearInterval(timer);
    }

    loading__text.innerText = `${currentLoadValue}%`;
    background.style.opacity=`${currentLoadValue/100}`;
}