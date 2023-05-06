//capturar os elementos de html
const homeScreen = document.querySelector("#homeScreen");
const buttonStart = document.querySelector("#buttonStart");
const gameScrren = document.querySelector("#gameScreen");
const board = document.querySelector("#board");

// variáveis
const deck = [
  "./images/harmonia.svg",
  "./images/poder.svg",
  "./images/projetar.svg",
  "./images/refletir.svg",
  "./images/harmonia.svg",
  "./images/poder.svg",
  "./images/projetar.svg",
  "./images/refletir.svg",
];

buttonStart.addEventListener("click", () => {
  // o que é para acontecer quando eu clicar no botão jogar?

  // esconder a minha homeScreen
  // como? -> adicionando a classe hide
  homeScreen.classList.add("hide");

  // mostrar a gameScreen
  // como? -> removendo a classe hide da div
  gameScrren.classList.remove("hide");


});


function startGame() {
    
}