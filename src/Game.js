"use strict";

function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function() {
  console.log(this.frames[0].firstRoll)
  console.log(this.frames[0].secondRoll)
  var finalScore = 0;
  for(var x = 0; x < this.frames.length; x++) {
    finalScore += this.frames[x].firstRoll + this.frames[x].secondRoll;
  }
 return finalScore;
};
