// let Game = require('./Game');
// let bowlingInterface = require('./bowlingInterface');
let element
let game
let interface


window.addEventListener("load", (event) => {
  element = document.getElementById("app");
  game = new Game();
  interface = new bowlingInterface(element, game);
});
