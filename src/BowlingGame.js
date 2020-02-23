'use strict';

// Game object

function Game() {
  this.frames = [];
  this.gameTotal = 0;
};

Game.prototype.addFrame = function(frame) {
  if (this.frames.length < 10) {
    this.frames.push(frame);  
  } else {
    return;
  };
};

Game.prototype.finalScore = function() {
  for (var i = 0; i < this.frames.length; i++) {
    for (var j = 0; j < this.frames[i].length; j++) {
      this.gameTotal += this.frames[i][j];   
    }  
  }
  return this.gameTotal;
};

// Frame object


function Frame () {
  this.rolls = [];
  this.roll1 = 0;
  this.roll2 = 0;
  this.frameTotal = 0;
};

Frame.prototype.firstRoll = function(roll) {
  this.roll1 = roll
  this.frameTotal += roll
  this.rolls.push(roll);
};

Frame.prototype.secondRoll = function(roll) {
  this.roll2 = roll
  this.frameTotal += roll
  this.rolls.push(roll);
};

Frame.prototype.isStrike = function() {
    return this.roll1 === 10;
  };
  
Frame.prototype.isSpare = function() {
    return (this.roll1 + this.roll2) === 10;
};
 
