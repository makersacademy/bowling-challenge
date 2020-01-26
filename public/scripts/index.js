"use strict"

window.addEventListener("load", function() {

  // Creates new controller when webpage is opened
  window.gameController = new GameController(FrameModel, GameView)
});
