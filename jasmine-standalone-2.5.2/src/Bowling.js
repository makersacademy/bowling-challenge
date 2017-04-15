'use strict';

function Bowling(){
  this.pins = 10
  this.currentScore = 0
  this.frame = {first: 0, second: 0}
  this.strike = false
  this.spare = false
  this.frameCollection = []
};

Bowling.prototype.firstThrow = function(score){
  this.pins = 10
  this.frame = {first: 0, second: 0}
  this.frame.first += score
  this.pins -= score
};

Bowling.prototype.secondThrow = function(score){
  if(this.pins === 0) {
    this.frame.second = 0
  } else {
    this.pins -= score
    this.frame.second += score
  }
  this.currentScore += (this.frame.first + this.frame.second)
  this.frameCollection.push(this.frame)
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

Bowling.prototype.isSpare = function(){
  if(this.frameScore() === 10) {
    this.spare = true
  } else {
    this.spare = false
  }
};
