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
  console.log(frame.currentFrame)
  this.isGameFinished();
  return frame.currentFrame;
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
    case 300:
        return "Perfect Game!";
        break;
  }
}
