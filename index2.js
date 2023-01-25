const state = {
    inputBtn : document.querySelector('#input-btn'),
    startBtn : document.querySelector('#start-btn'),
    resetBtn : document.querySelector('#reset-btn'),
    pauseBtn : document.querySelector('#pause-btn'),
    progressBar : document.querySelector('.progress-bar'),
    intervalId: undefined,
    defaultTime : 60,
    currentTime: 0,
}
const methods = {
    run ({inputBtn, startBtn, resetBtn, pauseBtn}) {
        inputBtn.addEventListener('input',(e) => state.defaultTime = e.target.value);
        inputBtn.addEventListener('change',() => methods.startTimer(state));
        startBtn.addEventListener('click', () => methods.startTimer(state));
        resetBtn.addEventListener('click', () => methods.resetTimer(state));
        pauseBtn.addEventListener('click', () => methods.pauseTimer(state));
    },
    startTimer({defaultTime, currentTime, progressBar, inputBtn}) {
        progressBar.classList.remove("pause");
        progressBar.classList.add("play");
        currentTime = Number(inputBtn.value);
        if (state.intervalId === undefined) {
            state.intervalId = setInterval(() => {
                if (Number(inputBtn.value) > 0) {
                    inputBtn.value = currentTime--;
                    progressBar.style.width = `${inputBtn.value  / defaultTime * 100}%`;
                } else {
                    clearInterval(state.intervalId);    
                }
            }, 1000);
        } 
    }, 
    pauseTimer({progressBar}) {
        progressBar.classList.add("pause");
        progressBar.classList.remove("play");
        clearInterval(state.intervalId);
        state.intervalId = undefined;
    },
    resetTimer({progressBar, inputBtn, defaultTime}) {
        progressBar.classList.remove("pause");
        progressBar.classList.remove("play");
        inputBtn.value = defaultTime;
        progressBar.style.width = `${100}%`;
        clearInterval(state.intervalId);
        state.intervalId = undefined;
    },
}
methods.run(state);