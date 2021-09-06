document.addEventListener("DOMContentLoaded", () => {
  const bowlingGame = new Game();
  document.querySelector("#addRoll").addEventListener("click", () => {
    let pinsDown = document.querySelector("#pinsDown");
    bowlingGame._registerPins(parseInt(pinsDown.value));
    pinsDown.value = "";
  });
  document.querySelector("#newGame").addEventListener("click", () => {
    bowlingGame._loadingFrames._newGame();
  });
});
