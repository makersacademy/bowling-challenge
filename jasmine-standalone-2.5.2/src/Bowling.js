'use strict';

function Bowling(){
  this.reset();
  this.turnNumber = 0
  this.currentScore = 0
  this.strikeFrame = []
  this.spareFrame = []
};

Bowling.prototype.reset = function() {
  this.pins = 10
  this.frame = {first: 0, second: 0}
  this.strike = false
  this.spare = false
  this.turnNumber += 1
};

Bowling.prototype.firstThrow = function(score){
  this.reset();
  this.pins -= score
  this.frame.first += score

  if(this.pins === 0) {
    this.strike = true
    this.strikeFrame.push(this.frame.first)
    this.currentScore += this.bonusStrike();
  };

  if(this.spareFrame.length) {
    this.currentScore += (this.bonusSpare());
  }

};

Bowling.prototype.secondThrow = function(score){

  if(this.strike && this.turnNumber <= 10) {
    throw new Error("Can't throw again after a strike")
  }

  if(this.turnNumber === 10) {
    this.pins = 10
  }

  this.pins -= score
  this.frame.second += score


  if(this.strike === true) {
    this.strikeFrame.push(this.frame.second)
    this.currentScore += this.bonusStrike();
  };

  if(this.pins === 0 && this.turnNumber <= 10) {
    this.spare = true
    this.spareFrame.push(10)
  } else {
    if(this.turnNumber > 10) {
      this.currentScore += this.bonusStrike()
    } else {
      this.currentScore += (this.frameScore() + this.bonusStrike());
    }
  }
};

Bowling.prototype.thirdThrow = function (score){
 this.currentScore += score
};


Bowling.prototype.bonusStrike = function () {
  var score;

  if(this.strikeFrame.length === 1 && !this.strike) {
    score = this.strikeFrame[0] + this.frameScore();
    this.strikeFrame.shift();

  } else if(this.strikeFrame.length === 2 && !this.strike) {
    score = this.strikeFrame[0] + this.strikeFrame[1] + this.frame.first;
    this.strikeFrame.shift();
    score += this.bonusStrike();

  } else if(this.strikeFrame.length === 3) {
    score = this.strikeFrame[0] + this.strikeFrame[1] + this.strikeFrame[2]
    this.strikeFrame.shift();
    score += this.bonusStrike(); /* it's called recursion - it means self referential */

  } else {
    score = 0
  }
  return score;
};

Bowling.prototype.bonusSpare = function () {
  var score;

  if(this.spareFrame.length === 1) {
    score = this.spareFrame[0] + this.frame.first
    this.spareFrame.shift();

  } else {
    score = 0
  }
  return score;
};

Bowling.prototype.frameScore = function () {
  return this.frame.first + this.frame.second
};
