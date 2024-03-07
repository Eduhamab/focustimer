import state from "./state.js"
import * as timer from"./timer.js"
import * as sounds from "./sounds.js"
import * as el from './elements.js'

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle('running')
  timer.countDownd()
  sounds.buttonPressAudio.play()
}

export function reset(){
  state.isRunnig = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()

}

export function plus(){
  timer.more()
  sounds.buttonPressAudio.play()

  
}

export function minus(){
  timer.less()
  sounds.buttonPressAudio.play()

}



export function toggleSound(){
  state.isMute = document.documentElement.classList.toggle('running')
  if(state.isMute){
    console.log(state.isMute)
  sounds.rain.play()
   return
   } sounds.rain.pause()

   console.log(state.isMute)
} 


export function forestPlay(){
  sounds.forest.play()
}

export function forestPause(){
  sounds.forest.pause()
}

export function rainPause(){
  sounds.rain.pause()
}
export function rainPlay(){
  sounds.rain.play()
}

export function coffePlay(){
  
  sounds.coffe.play()
}

export function coffePause(){
  sounds.coffe.pause()
}

export function firePlay(){
  sounds.fire.play()
}

export function firePause(){
  sounds.fire.pause()
}


