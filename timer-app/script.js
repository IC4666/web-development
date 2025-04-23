const minitue = document.querySelector('#input-minitue');
const second = document.querySelector('#input-second');
const time = document.querySelector('.time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {

    time.classList.remove('hide');
    pause.classList.remove('hide');
    reset.classList.remove('hide');
    second.classList.add('hide');
    minitue.classList.add('hide');

    start.disabled = true;
    pause.disabled = false;

    time.innerText = minitue.value + " : " + second.value;

    interval = setInterval(() => {
        if (minitue.value !== "0" || second.value !== "0") {
            second.value--;

            if (minitue.value !== "0" && second.value < "0") {
                minitue.value--;
                second.value = "59"
            }
            time.innerText = minitue.value + " : " + second.value;
        }
        else if (minitue.value == "0" || second.value == "0") {
            resetTimer();
            popup("Times Up");

        }
    }, 1000)
})


pause.addEventListener('click', () => {
    clearInterval(interval)
    start.disabled = false;
    pause.disabled = true;
})

reset.addEventListener('click', resetTimer)


function resetTimer() {
    clearInterval(interval);
    minitue.value = "0";
    second.value = "0";

    start.disabled = false;
    pause.classList.add('hide');
    reset.classList.add('hide');
    second.classList.toggle('hide');
    minitue.classList.toggle('hide');
    time.classList.toggle('hide');
}

popupBox = document.querySelector(".pop-up")
popupText = document.querySelector(".pop-up-text")

function popup(message) {

    popupText.innerText = message;
    popupBox.showModal();

    interval = setTimeout(() => {
        popupBox.close();
    }, 5000);
}

function closePopup() {
    popupBox.close();
    clearTimeout(interval);
}