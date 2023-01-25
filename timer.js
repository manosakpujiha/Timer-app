const durationInput = document.querySelector('#duration');
const pauseBtn = document.querySelector('#pause');
const startBtn = document.querySelector('#start');
const circle = document.querySelector('circle');

class Timer {
    constructor (durationInput, startInput, pauseInput, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startInput;
        this.pauseBtn = pauseInput;
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onCompleted = callbacks.onCompleted
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    add = (
        () => {
        let counter = 0;
        return  () => console.log(counter = counter + 1);
            return counter;
        })()
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.intervalId = setInterval(this.tick, 20);
    }
    pause = () => {
        clearInterval(this.intervalId)
    }
    tick = () => {
        this.onTick
        if(this.timeRemaining <= 0) {
            this.pause();
            if(this.onCompleted) {
                this.onCompleted();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };
    get timeRemaining () {
        return parseFloat(durationInput.value);
    }
    set timeRemaining (time) {
        this.durationInput.value = time.toFixed(2);
    }
}
export {Timer, durationInput, startBtn, pauseBtn, circle};