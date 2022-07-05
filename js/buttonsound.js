export function buttonSelect({
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace
})
{
  
  function forestPlayer(){
    buttonForest.classList.add('select')
    buttonRain.classList.remove('select')
    buttonCoffee.classList.remove('select')
    buttonFireplace.classList.remove('select')
  }

  function coffeePlayer(){
    buttonForest.classList.remove('select')
    buttonRain.classList.remove('select')
    buttonCoffee.classList.add('select')
    buttonFireplace.classList.remove('select')
  }

  function rainPlayer(){
    buttonForest.classList.remove('select')
    buttonRain.classList.add('select')
    buttonCoffee.classList.remove('select')
    buttonFireplace.classList.remove('select')
  }

  function firePlayer(){
    buttonForest.classList.remove('select')
    buttonRain.classList.remove('select')
    buttonCoffee.classList.remove('select')
    buttonFireplace.classList.add('select')
  }

  function dark(){
    buttonForest.classList.add('dark')
    buttonRain.classList.add('dark')
    buttonCoffee.classList.add('dark')
    buttonFireplace.classList.add('dark')
  }
  function light(){
    buttonForest.classList.remove('dark')
    buttonRain.classList.remove('dark')
    buttonCoffee.classList.remove('dark')
    buttonFireplace.classList.remove('dark')
  }
  
  // function forestStop(){
  
  // }
  
  // function coffeStop(){
  
  // }
  
  // function rainStop(){
  
  // }
  
  // function fireStop(){
  
  // }
  
  return{
    forestPlayer,
    coffeePlayer,
    rainPlayer,
    firePlayer,
    dark,
    light,
  }
}