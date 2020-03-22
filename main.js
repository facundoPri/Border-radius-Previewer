let btnAll = document.querySelector("#buttons #all");
let btn4 = document.querySelector("#buttons #four");
let btn8 = document.querySelector("#buttons #eight");
let btnCSS = document.querySelector("#buttons #CSS");

let allInone = document.querySelector("#allInone");
let fourBorder = document.querySelector("#fourBorder");
let eightBorder = document.querySelector("#eightBorder");
let clipboard = document.querySelector("#clipboard");
let settings = document.querySelectorAll("#settings > div");

let sliders = document.querySelectorAll('input[type=range]')

let box = document.querySelector('#box')

btnAll.onclick = () => open(allInone);
btn4.onclick = () => open(fourBorder);
btn8.onclick = () => open(eightBorder);
btnCSS.onclick = () => open(clipboard);

function open(div) {
  settings.forEach(e => e.style.display = "none")
  div.style.display = "grid";
}

function rangeValue(elem) {
  var newValue = elem.value
  cambiarRadius(elem.id, newValue)
}

sliders.forEach(e => e.oninput = () => rangeValue(e))

function cambiarRadius(slider, valor) {
  switch (slider) {
    case 'all':
      box.style.borderRadius = `${valor}px`
      break;
    case 'topRigth':
      box.style.borderTopRightRadius = `${valor}px`
      break;
    case 'topLeft':
      box.style.borderTopLeftRadius = `${valor}px`
      break;
    case 'bottomRigth':
      box.style.borderBottomRightRadius = `${valor}px`
      break;
    case 'bottomLeft':
      box.style.borderBottomLeftRadius = `${valor}px`
      break;
      default:
        console.log('Algo salio mal')
        console.log(slider)
  }
}
let CSSDisplay = document.querySelector('#CSSDisplay')

btnCSS.onclick = displayCSS

function displayCSS (){
  CSSDisplay.innerHTML = `
border-top-left-radius: ${box.style.borderTopRightRadius};<br>
border-top-right-radius: ${box.style.borderTopLeftRadius};<br>
border-bottom-left-radius: ${box.style.borderBottomRightRadius};<br>
border-bottom-right-radius: ${box.style.borderBottomLeftRadius};`
}
// borderTopLeftRadius
// borderTopRightRadius
// borderBottomRightRadius
// borderBottomLeftRadius

// border-top-left-radius: 300px;
// border-top-right-radius: 300px;
// border-bottom-left-radius: 300px;
// border-bottom-right-radius: 300px;