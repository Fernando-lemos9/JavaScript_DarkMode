// DOM
import {Controls } from './controls.js'
import {Timer} from './timer.js'
import {buttonSelect} from './buttonsound.js'
import { Sound } from './sound.js'
import { Elements } from './elements.js'
import { Mode } from './modes.js'


const {
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonLess,
  buttonMore,
  minutesDisplay,
  secondsDisplay,
  volumeControl,
  checkbox,
} = Elements

const mode = Mode()

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
    secondsDisplay,
    resetControls:controls.reset
})

const buttonselect =  buttonSelect({
  buttonForest,
  buttonCoffee,
  buttonRain,
  buttonFireplace
})

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
})

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes){
      timer.reset()
      return
    }
    timer.updateTimer(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  buttonMore.addEventListener('click', function(){
    timer.more()
    timer.countdown()
    timer.hold()
  })
  
  buttonLess.addEventListener('click', function(){
    timer.less()
    timer.countdown()  
    timer.hold()
  })

  buttonForest.addEventListener('click', function(){
    buttonselect.forestPlayer()
    sound.pauseSound()
    sound.pressForest()
  })
  
  
  buttonCoffee.addEventListener('click', function(){
    buttonselect.coffeePlayer()
    sound.pauseSound()
    sound.pressCoffee()
  })
  
  buttonRain.addEventListener('click', function(){
    buttonselect.rainPlayer()
    sound.pauseSound()
    sound.pressRain()
  })
  
  buttonFireplace.addEventListener('click', function(){
   buttonselect.firePlayer()
   sound.pauseSound()
   sound.pressFire()
  })
  
  buttonForest.addEventListener('dblclick', function(){
    buttonForest.classList.remove('select')
    sound.pressForestStop()
  })
  
  buttonCoffee.addEventListener('dblclick', function(){
    buttonCoffee.classList.remove('select')
    sound.pressCoffeeStop()
  })
  
  buttonFireplace.addEventListener('dblclick', function(){
    buttonFireplace.classList.remove('select')
    sound.pressfireStop()
  })
  
  buttonRain.addEventListener('dblclick', function(){
    buttonRain.classList.remove('select')
    sound.pressRainStop()
  })

  volumeControl.addEventListener('change', function () {
    sound.pressForest() = this.value
  }) 


checkbox.addEventListener("change", ({target}) => {
  target.checked ? mode.eventsDark() : mode.eventsLight()
  target.checked ? mode.modeDark() : mode.modeLight()
  target.checked ? buttonselect.dark() : buttonselect.light()
})