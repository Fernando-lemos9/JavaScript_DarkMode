export function buttonEvents(){
  
  
  function buttonPlay(){
    buttonPlay.addEventListener('click', function(){
      controls.play()
      timer.countdown()
    })
  }
  function buttonPause(){
    buttonPause.addEventListener('click', function(){
      controls.pause()
      timer.hold()
    })
  }
  function buttonStop(){
    buttonStop.addEventListener('click', function(){
      controls.reset()
      timer.reset()
    })
  }
  function buttonSet(){
    buttonSet.addEventListener('click', function(){
      let newMinutes = controls.getMinutes()
      if(!newMinutes){
          timer.reset()
          return
        }
        timer.updateTimer(newMinutes, 0)
        timer.updateMinutes(newMinutes)
      })
  }
  function buttonMore(){
      buttonMore.addEventListener('click', function(){
        timer.hold()
        timer.more()
        timer.countdown()
      })
  }
  function buttonLess(){
    buttonLess.addEventListener('click', function(){
      timer.hold()
      timer.less()
      timer.countdown()  
    })
  }
  function buttonForest(){
    buttonForest.addEventListener('click', function(){
      buttonselect.forestPlayer()
      sound.pauseSound()
      sound.pressForest()
    })
  }
  function buttonCoffee(){
    buttonCoffee.addEventListener('click', function(){
      buttonselect.coffeePlayer()
      sound.pauseSound()
      sound.pressCoffee()
    })
  }
  function buttonRain(){
    buttonRain.addEventListener('click', function(){
      buttonselect.rainPlayer()
      sound.pauseSound()
      sound.pressRain()
    })
  }
  function buttonFireplace(){
    buttonFireplace.addEventListener('click', function(){
     buttonselect.firePlayer()
     sound.pauseSound()
     sound.pressFire()
    })

  }
  function buttonForestStop(){
    buttonForest.addEventListener('dblclick', function(){
      buttonForest.classList.remove('select')
      sound.pressForestStop()
    })

  }
  function buttonCoffeeStop(){
    buttonCoffee.addEventListener('dblclick', function(){
      buttonCoffee.classList.remove('select')
      sound.pressCoffeeStop()
    })
  }
  function buttonRainStop(){
    buttonFireplace.addEventListener('dblclick', function(){
      buttonFireplace.classList.remove('select')
      sound.pressfireStop()
    })
  }
  function buttonFireplaceStop(){
    buttonRain.addEventListener('dblclick', function(){
      buttonRain.classList.remove('select')
      sound.pressRainStop()
    })
  }

  return{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonMore,
    buttonLess,
    buttonForest,
    buttonCoffee,
    buttonRain,
    buttonFireplace,
    buttonForestStop,
    buttonCoffeeStop,
    buttonRainStop,
    buttonFireplaceStop,
  }

}