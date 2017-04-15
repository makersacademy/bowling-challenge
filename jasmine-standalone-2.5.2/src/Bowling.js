'use strict';

function Bowling(){
  this.pins = 10
  this.currentScore = 0
  this.frame = {first: 0, second: 0}
  this.strike = false
};

Bowling.prototype.firstThrow = function(score){
  this.frame = {first: 0, second: 0}
  this.frame.first += score
  this.pins -= score
};

Bowling.prototype.secondThrow = function(score){
  this.pins -= score
  this.frame.second += score
  this.currentScore += (this.frame.first + this.frame.second)
};

Bowling.prototype.frameScore = function () {
  return this.frame.first + this.frame.second
};

Bowling.prototype.isStrike = function(){
  if(this.frame.first === 10) {
    this.strike = true
  } else {
    this.strike = false
  }
};
