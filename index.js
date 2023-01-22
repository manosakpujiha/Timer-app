class Timer {
    constructor (durationInput, startInput, pauseInput) {
        this.durationInput = durationInput;
        this.startBtn = startInput;
        this.pauseBtn = pauseInput;
        // console.dir(this.startBtn);
        this.startBtn.addEventListener('click', this.start)
    }
    start() {
        console.log('Timer started');
    }
}
const durationInput = document.querySelector('#duration');
const pauseBtn = document.querySelector('#pause');
const startBtn = document.querySelector('#start');
const timer = new Timer(durationInput, startBtn, pauseBtn)

let colors = {
    print : function () {
        console.log('hello');
    },
    hey() {
        console.log(this);
    }
}
colors.hey.bind({b: 'manos'})