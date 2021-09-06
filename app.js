let countHour = document.querySelector(".countHour");
let countMinute = document.querySelector(".countMinute");
let countSecond = document.querySelector(".countSecond");
let countMilliSecond = document.querySelector(".countMilliSecond");

let startButton = document.querySelector(".start");
let pauseButton = document.querySelector(".pause");
let resetButton = document.querySelector(".reset");

let hour = 00;
let minute = 00;
let second = 00;
let milliSecond = 00;
let interval;

window.onload = () => clearValue();

startButton.onclick = function() {
    clearInterval(interval);
    interval = setInterval(runWatch, 10);
}

pauseButton.onclick = function() {
    clearInterval(interval);
}

resetButton.onclick = function() {
    clearInterval(interval);
    clearValue();
}

function runWatch() {
    milliSecond++;

    if (milliSecond > 99) {
        second++;
        countSecond.innerText = "0" + second;
        milliSecond = 0;
        countMilliSecond.innerText = "0" + milliSecond;
    }
    if (second > 59) {
        minute++;
        countMinute.innerText = "0" + minute;
        second = 0;
        countSecond.innerText = "0" + second;
    }
    if (minute > 59) {
        hour++;
        countHour.innerText = "0" + hour;
        minute = 0;
        countSecond.innerText = "0" + second;
    }

    if (milliSecond < 9) {
        countMilliSecond.innerText = "0" + milliSecond;
    }
    else {
        countMilliSecond.innerText = milliSecond;
    }

    if (second > 9) {
        countSecond.innerText = second;
    }
    if (minute > 9) {
        countMinute.innerText = minute;
    }
    if (hour > 9) {
        countHour.innerText = hour;
    }
}

function clearValue() {
    countMilliSecond.innerText = "00";
    countSecond.innerText = "00";
    countMinute.innerText = "00";
    countHour.innerText = "00";

    milliSecond = 00;
    second = 00;
    minute = 00;
    hour = 00;
}
