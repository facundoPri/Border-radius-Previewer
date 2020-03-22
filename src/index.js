import "./styles.css";
let btnAll = document.querySelector("#buttons #all");
let btn4 = document.querySelector("#buttons #four");
let btn8 = document.querySelector("#buttons #eight");
let btnCopy = document.querySelector("#buttons #CSS");

let allInone = document.querySelector("#allInone");
let fourBorder = document.querySelector("#fourBorder");
let eightBorder = document.querySelector("#eightBorder");
let clipboard = document.querySelector("#clipboard");
let settings = document.querySelector("#settings > div");
let sliders = ["allInone", "fourBorder", "eightBorder", "clipboard"];

btnAll.onclick = () => open(allInone);
btn4.onclick = () => open(fourBorder);
btn8.onclick = () => open(eightBorder);
btnCopy.onclick = () => open(clipboard);

function open(div) {
  div.style.display = "block";
}
