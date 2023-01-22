const state = {
    time : document.querySelector('#time'),
    btn : document.querySelector('#btn'),
    resetBtn : document.querySelector('#reset-btn'),
    pause : document.querySelector('#pause'),
    progressBar : document.querySelector('#progress-bar'),
    intervalId: undefined,
    defaultTime : 60,
    currentTime: 0,
}
const methods = {
    startTimer() {
        state.progressBar.style.color = 'blue';
        state.currentTime = Number(state.time.value);
        if (state.intervalId === undefined) {
            state.intervalId = setInterval(() => {
                if (Number(state.time.value) > 0) {
                    state.time.value = state.currentTime--;
                    state.progressBar.style.width = `${state.time.value  / state.defaultTime * 100}%`;
                } else {
                    clearInterval(state.intervalId);    
                }
            }, 1000);
        } 
    }, 
    pauseTimer() {
        state.progressBar.style.color = 'gold';
        state.progressBar.classList.add("pause");
        clearInterval(state.intervalId);
        state.intervalId = undefined;
        console.log('interval cleared, Id=', state.intervalId);
    },
    resetTimer() {
        state.progressBar.style.color = 'blue';
        state.time.value = state.defaultTime;
        state.progressBar.style.width = `${100}%`;
        clearInterval(state.intervalId);
        state.intervalId = undefined;
    },
}
state.time.addEventListener('input', (e) => state.defaultTime = e.target.value);
state.btn.addEventListener('click', methods.startTimer);
state.resetBtn.addEventListener('click', methods.resetTimer);
state.pause.addEventListener('click', methods.pauseTimer);