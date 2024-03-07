import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as el from './elements.js'


export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] !="function"){
      return
    }

    actions[action]()
    
  })
}


export function registerForest(){
  el.buttonForest.addEventListener('click',()=>{
    if(el.buttonForest.classList.contains('activeSound'), el.forestWhite.classList.contains('activeSound')){
      el.forestWhite.classList.remove('activeSound');
      el.buttonForest.classList.remove('activeSound');
      actions.forestPause();
      return
    } el.buttonForest.classList.add('activeSound');
      el.forestWhite.classList.add('activeSound');
      
      actions.forestPlay();
    
  })
}

export function registerRain(){
  el.buttonRain.addEventListener('click',()=>{
    if(el.buttonRain.classList.contains('activeSound'), el.rainWhite.classList.contains('activeSound')){
      el.rainWhite.classList.remove('activeSound');
      el.buttonRain.classList.remove('activeSound');
      actions.rainPause();
      return
    } el.buttonRain.classList.add('activeSound');
      el.rainWhite.classList.add('activeSound');
      
      actions.rainPlay();
    
  })
}

export function registerCoffe(){
  el.buttonCoffe.addEventListener('click',()=>{
    if(el.buttonCoffe.classList.contains('activeSound'), el.coffeWhite.classList.contains('activeSound')){
       el.coffeWhite.classList.remove('activeSound');
       el.buttonCoffe.classList.remove('activeSound');
       actions.coffePause();
       return
    } el.buttonCoffe.classList.add('activeSound');
      el.coffeWhite.classList.add('activeSound');
      actions.coffePlay();
  })
}

export function registerFire(){
  el.buttonFire.addEventListener('click',()=>{
    if(el.buttonFire.classList.contains('activeSound'), el.fireWhite.classList.contains('activeSound')){
      el.fireWhite.classList.remove('activeSound');
      el.buttonFire.classList.remove('activeSound');
      actions.firePause();
      return
      
    } el.buttonFire.classList.add('activeSound');
      el.fireWhite.classList.add('activeSound');
      actions.firePlay();
  })
}
