"use strict";

// The Game
function Game() {
  this.scoreCard = [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0, 0]]
  this.turn = 0
}

Game.prototype.bowl = function(){
  var frame = new Frame();
  if (this.turn < 10) {
    frame.bowl();
    frame.bowl();
    this.scoreCard[this.turn] = frame.score;
    this.turn += 1;
  } else {
    return 'Game Over'
  }
}
