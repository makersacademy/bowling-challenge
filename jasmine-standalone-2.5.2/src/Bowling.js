'use strict';

function Bowling(){
  this.reset();
  this.currentScore = 0
  this.strikeFrame = []
  // this.frameCollection = []
};

Bowling.prototype.firstThrow = function(score){
  this.reset();
  this.pins -= score
  this.frame.first += score
  if(this.pins === 0) {
    this.strike = true
    this.strikeFrame.push(this.frame.first)
    // if(this.strikeFrame === 3) {
    //   this.currentScore += this.bonusScore();
    // };
    // this.frameCollection.push(this.frame)
  };
};

Bowling.prototype.secondThrow = function(score){
  if(this.strike) {
    throw new Error("Can't throw again after a strike")
  }
  this.pins -= score
  this.frame.second += score
  this.currentScore += (this.frame.first + this.frame.second + this.bonusScore());
  // this.frameCollection.push(this.frame)
  if(this.pins === 0) {
    this.spare = true
  }
};

Bowling.prototype.bonusScore = function () {
  var score;
  if(this.strikeFrame.length === 1 && this.frame.first < 10) {
    score = this.strikeFrame[0] + this.frameScore();
    this.strikeFrame.shift();
  } else if(this.strikeFrame.length === 2 && this.frame.first < 10) {
    score = this.strikeFrame[0] + this.strikeFrame[1] + this.strikeFrame[1] + this.frame.first + this.frameScore();
    this.strikeFrame.shift();
    this.strikeFrame.shift();
  } else if(this.strikeFrame.length === 3) {
    score = this.strikeFrame[0] + this.strikeFrame[1] + this.strikeFrame[2]
    this.strikeFrame.shift();
    score += this.bonusScore(); /* it's called recursion - it means self referential */
  } else {
    score = 0
  }
  return score;
};

Bowling.prototype.frameScore = function () {
  return this.frame.first + this.frame.second
};

Bowling.prototype.reset = function() {
  this.pins = 10
  this.frame = {first: 0, second: 0}
  this.strike = false
  this.spare = false
};
