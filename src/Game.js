"use strict";

function Game() {
  this.frames = [];
};

Game.prototype.newGame = function() {
  this.frames = [];
};

Game.prototype.play = function() {
  var theFrame = new Frame();
  theFrame.bowl();
  this.frames.push(theFrame.currentFrame);
  this.isGameFinished();
};

Game.prototype.isGameFinished = function() {
  var finished = this.frames.length === 10 ? "Game has finished!" : "Next frame"
  console.log(finished);
};
