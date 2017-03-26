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
  if(this.frames.length > 10) {
    this._checkLastFrame();
    throw "Game has finished."
  } else {
    return "Next frame"
  }
};

Game.prototype.result = function()  {
  switch(score.runningScore) {
    case 0:
        return "Gutter Game!";
        break;
    case 300:
        return "Perfect Game!";
        break;
  }
}

Game.prototype._checkLastFrame = function () {
  if (this.frames[9][0] == 10) {
    var frame = new Frame();
    frame.bowl();
    this.frames.push(frame.currentFrame);
    console.log("I checked here")
  //  this.isGameFinished();
} else if (this.frames[9][0] + this.frames[9][1] == 10){
    console.log("I got here")
    var frame = new Frame();
    frame.bowl();
    this.frames.push(frame.currentFrame);
  }
}

Game.prototype.resetGame = function () {
  this.frames = [];
  score.runningScore = 0;
  score.strike = false;
  score.spare = false;
};
