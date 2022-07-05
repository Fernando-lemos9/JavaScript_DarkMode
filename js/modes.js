export function Mode(){

  const html = document.querySelector("html")
  const dark = document.querySelector('.mode-dark')
  const light = document.querySelector('.mode-light')
  
  
  const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
  
  const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorText: getStyle(html, "--color-text"),
    colorButton: getStyle(html, "--color-button"),
  }
  
  const darkMode = {
    bg: "#121214",
    bgPanel: "#434343",
    colorText: "#FFFFFF",
    colorButton: " #C4C4CC"
  }
  
  const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
  
  
  const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
  }
  
  function modeDark(){
    light.classList.add('hide')
    dark.classList.remove('hide')
  }
  
  function modeLight(){
    light.classList.remove('hide')
    dark.classList.add('hide')
  }

  function eventsDark(){
    changeColors(darkMode)
  }

  function eventsLight(){
    changeColors(initialColors)
  }

  return{
    modeDark,
    modeLight,
    eventsDark,
    eventsLight
  }
}
