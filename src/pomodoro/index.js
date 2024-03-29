import state from "./state.js";
import * as events from './events.js'
import* as timer from "./timer.js"

export function start(minutes, seconds){
  state.minutes = minutes
  state.seconds = seconds

  events.registerCoffe()
  events.registerForest()
  events.registerRain()
  events.registerFire()
  timer.updateDisplay()
  events.registerControls()
}

