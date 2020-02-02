"use strict"

window.addEventListener("load", function() {
  // Creates new controller when webpage is opened
  window.gameController = new GameController(new GameModel(FrameModel), new GameView)
});
