export function Sound(){

  const forest = new Audio ("https://github.com/Fernando-lemos9/audioTime/blob/main/Floresta.wav?raw=true")
  const rain = new Audio("https://github.com/Fernando-lemos9/audioTime/blob/main/Chuva.wav?raw=true")
  const coffee = new Audio ("https://github.com/Fernando-lemos9/audioTime/blob/main/Cafeteria.wav?raw=true")
  const fire = new Audio("https://github.com/Fernando-lemos9/audioTime/blob/main/Lareira.wav?raw=true")



  function pressForest(){
    forest.play()
  }
  function pressRain(){
    rain.play()
  }
  function pressCoffee(){
    coffee.play()
  }
  function pressFire(){
    fire.play()
  }
  

  function pressForestStop(){
    forest.pause()
  }

  function pressCoffeeStop(){
    coffee.pause()
  }

  function pressRainStop(){
    rain.pause()
  }

  function pressfireStop(){
    fire.pause()
  }

  function pauseSound(){
    forest.pause()
    coffee.pause()
    rain.pause()
    fire.pause()
  }

  // function bgAudioStart{
  //   bgAudio.play
  // }

  return {
    pressForest,
    pressRain,
    pressCoffee,
    pressFire,
    pressfireStop,
    pressRainStop,
    pressCoffeeStop,
    pressForestStop,
    pauseSound,
  }

}