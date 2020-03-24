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

let CSSDisplay = document.querySelector('#CSSDisplay')

btnAll.onclick = () => open(allInone);
btn4.onclick = () => open(fourBorder);
btn8.onclick = () => open(eightBorder);
btnCSS.onclick = () => open(clipboard);

function open(div) {
  div.id === 'clipboard' ? displayCSS() : console.log('no displayCSS()')
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


function displayCSS(){
  CSSDisplay.value = `
border-top-left-radius: ${box.style.borderTopRightRadius};
border-top-right-radius: ${box.style.borderTopLeftRadius};
border-bottom-left-radius: ${box.style.borderBottomRightRadius};
border-bottom-right-radius: ${box.style.borderBottomLeftRadius};`
}

function copyText() {
  CSSDisplay.select();
  CSSDisplay.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}