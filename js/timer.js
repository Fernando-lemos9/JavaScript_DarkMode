export function Timer({
minutesDisplay,
secondsDisplay,
resetControls
}){

  let minutes = Number(minutesDisplay.textContent)
  let newSeconds = Number(secondsDisplay.textContent)
  let timerOut


  function updateTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    newSeconds = seconds
  }
  
  function updateMinutes(newMinutes){
    minutes = newMinutes
  }
    
  function reset(){
    clearTimeout(timerOut)
    updateTimer(minutes, 0)
  }

  function countdown(){
    timerOut = setTimeout(function(){
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
      if (minutes <= 0 && seconds <= 0){
        reset()
        resetControls()
        return
      }
  
      if(seconds <= 0){
        seconds = 60
        minutes --
      }
  
      updateTimer(minutes, seconds-1)

      countdown()
      
      },1000)
  }
  
  function hold(){
    clearTimeout(timerOut)
  }
  
  function more(){
    minutes = minutes + 5
    updateTimer(minutes, newSeconds)
  }
  
  function less(){
    minutes = minutes - 5
    if(minutes <= 0){
      resetTimer()
      resetControls()
    }
    updateTimer(minutes, newSeconds)
  }

  return {
    updateTimer,
    updateMinutes,
    countdown,
    reset,
    hold,
    more,
    less
  }
}