import {Timer, durationInput, startBtn, pauseBtn, circle} from './timer.js';
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration){
        console.log('Timer Started');
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    },
    onCompleted(){
        console.log('Timer countdown completed')
    }
});