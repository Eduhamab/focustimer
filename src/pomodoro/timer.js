import state from "./state.js";
import * as el from "./elements.js"
import { reset } from "./actions.js";
import { finish } from "./sounds.js";

export function countDownd(){
    clearTimeout(state.countdownId)

    if(!state.isRunnig){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

     if(seconds < 0 ){
        seconds = 59

        minutes--
     }
     if(minutes < 0 ){
        reset()
        finish.play()
        return
     }

    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(()=> countDownd(),1000)
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds 

    el.minutes.textContent = String(minutes).padStart(2,"0")
    el.seconds.textContent = String(seconds).padStart(2,'0')
}

export function more(){
      let newSeconds = Number(el.seconds.textContent)    
      let newNumber = Number(el.minutes.textContent) + 5
    updateDisplay(newNumber, newSeconds)

    if(Number(el.minutes.textContent > 120)){
       el.minutes.textContent = 120
       alert("Tempo maximo de 120 minutos")
    }
}

export function less(){
    let newSeconds = Number(el.seconds.textContent)
    if(Number(el.minutes.textContent) > 5){
        let newNumber = Number(el.minutes.textContent) - 5
        updateDisplay(newNumber, newSeconds)
    }
    }
