const time = document.querySelector('#time');
const btn = document.querySelector('#btn');
const resetBtn = document.querySelector('#reset-btn');
const pause = document.querySelector('#pause');
const progressBar = document.querySelector('#progress-bar');
let intervalId;
let defaultTime =60;
let currentTime;

time.addEventListener('input', (e) => defaultTime = e.target.value)
btn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
pause.addEventListener('click', pauseTimer);


function startTimer() {
    progressBar.style.color = 'blue';
    currentTime = Number(time.value);
    if (intervalId === undefined) {
        intervalId = setInterval(() => {
            if (Number(time.value) > 0) {
                time.value = currentTime--;
                progressBar.style.width = `${time.value  / defaultTime * 100}%`;
            } else {
                clearInterval(intervalId);    
            }
        }, 1000);
    } 
} 

function resetTimer() {
    progressBar.style.color = 'blue';
    time.value = defaultTime;
    progressBar.style.width = `${100}%`;
    clearInterval(intervalId);
    intervalId = undefined;
}

function pauseTimer() {
    progressBar.style.color = 'gold';
    progressBar.classList.add("pause");
    clearInterval(intervalId);
    intervalId = undefined;
    console.log ('interval cleared, Id=', intervalId);
}