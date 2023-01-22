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
    run ({time, btn, resetBtn, pause}) {
        time.addEventListener('input', (e) => state.defaultTime = e.target.value);
        btn.addEventListener('click', () => methods.startTimer(state));
        resetBtn.addEventListener('click', () => methods.resetTimer(state));
        pause.addEventListener('click', () => methods.pauseTimer(state));
    },
    startTimer({defaultTime, currentTime, progressBar, time, intervalId}) {
        progressBar.style.color = 'blue';
        currentTime = Number(time.value);
        if (state.intervalId === undefined) {
            state.intervalId = setInterval(() => {
                if (Number(time.value) > 0) {
                    time.value = currentTime--;
                    progressBar.style.width = `${time.value  / defaultTime * 100}%`;
                } else {
                    clearInterval(state.intervalId);    
                }
            }, 1000);
        } 
    }, 
    pauseTimer({progressBar}) {
        progressBar.style.color = 'gold';
        progressBar.classList.add("pause");
        clearInterval(state.intervalId);
        state.intervalId = undefined;
        console.log('paused');
    },
    resetTimer({progressBar, time, defaultTime}) {
        console.log('reset')
        progressBar.style.color = 'blue';
        time.value = defaultTime;
        progressBar.style.width = `${100}%`;
        clearInterval(state.intervalId);
        state.intervalId = undefined;
    },
}

methods.run(state);