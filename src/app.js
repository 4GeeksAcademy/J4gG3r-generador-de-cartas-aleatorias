import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let numbers = ["2", "3", "4", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"]
  let icons = ["♥", "♠", "♣", "♦"]

  const generateRandomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  let randomNumber = generateRandomValue(numbers)
  let randomIcon = generateRandomValue(icons)


  const elements = document.querySelectorAll("span")
  elements[0].innerText=randomIcon
  elements[1].innerText=randomNumber
  elements[2].innerText=randomIcon

};
