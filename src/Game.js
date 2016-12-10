'use strict';

function Game() {
 this.pins = [0,1,2,3,4,5,6,7,8,9,10]
 this.score = [];
 this.frameCount = 0;
 this.rack = false;
 this.firstScore = 0;
 this.secondScore = 0;
 this.result1 = "";
 this.result2 = ""
 this._newPins = [];
}

Game.prototype.rackUp = function() {
  if (this.frameCount <= 10) {
  this.rack = true;
  return this.rack;
};
};

Game.prototype.roll_1 = function() {
  this.firstScore = this.pins[Math.floor(Math.random() * this.pins.length)];
  if (this.firstScore === 10) {
     this.result1 = "Strike";
     return this.result1;
  } else {
    return this.firstScore;
  };
};

Game.prototype.pinSweep = function (){
  this.newPins = this.pins.splice(-(this.firstScore));
  return this.pins;
};

Game.prototype.roll_2 = function() {
  this.secondScore = this.pins[Math.floor(Math.random() * this.pins.length)];
  if (this.secondScore + this.firstScore === 10) {
    this.result2 = "Spare";
    return this.result2;
  } else {
    return this.secondScore;
  };
};

Game.prototype.currentScore = function() {
  this.score.push([this.firstScore, this.secondScore]);
  return this.score;
};

Game.prototype.currentFrame = function() {
  this.frameCount = this.score.length;
  return this.frameCount;
};
