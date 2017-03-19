"use strict";
var score;

function Game() {
  this.frames = [];
  score = new Score();
};

Game.prototype.newGame = function() {
  this.frames = [];
};

Game.prototype.play = function() {
  var frame = new Frame();
  frame.bowl();
  this.frames.push(frame.currentFrame);
  this.isGameFinished();
  return frame.currentFrame;
};

Game.prototype.isGameFinished = function() {
  if(this.frames.length >= 10) {
    this.resetGame();
    return "Game has finished."
  } else {
    return "Next frame"
  }
};

Game.prototype.result = function() {
  switch(score.runningScore) {
    case 0:
        return "Gutter Game!";
        break;
    case 300:
        return "Perfect Game!";
        break;
  }
}

Game.prototype.resetGame = function () {
  this.frames = [];
};
