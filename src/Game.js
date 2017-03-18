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
};

Game.prototype.isGameFinished = function() {
  var finished = this.frames.length === 10 ? "Game has finished!" : "Next frame"
  return finished;
};

Game.prototype.result = function() {
  switch(score.runningScore) {
    case 0:
        return "Gutter Game!";
        break;
  }
}
