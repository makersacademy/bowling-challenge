'use strict';
// var Frame = require('/Users/student/Projects/portfolio/Week-5/bowling/src/Frame.js');

function Game(){
  this.throws = [];
  this.throwCount = 0;
  this.frameCount = 0;
}

Game.prototype.shot = function(throwOne, throwTwo = 0){
  if (throwOne === 10){
    this.throws.push(throwOne)
  } else {
  this.throws.push(throwOne, throwTwo)
  }

  this.frameCount += 1
}

Game.prototype.score = function() {
  var total = 0;
  var throwIndex = 0;
  for (var i = 0; i < this.frameCalc(); i++) {
    if (this.rollsStrike(throwIndex)) {
      total += this.strikeScore(throwIndex);
      throwIndex += 1;
    }
    if (this.rollsSpare(throwIndex)) {
      total += this.spareScore(throwIndex);
      throwIndex += 2;
    }
    if (this.normalThrow(throwIndex)) {
      total += this.normalScore(throwIndex);
      throwIndex += 2;
    }
  }
  return total
}

Game.prototype.rollsStrike = function (throwIndex) {
  if (this.throws[throwIndex] === 10){
    return true
  }
};

Game.prototype.rollsSpare = function (throwIndex) {
  if (this.throws[throwIndex] + this.throws[throwIndex + 1] === 10){
    return true
  }
};

Game.prototype.normalThrow = function (throwIndex) {
  if (this.throws[throwIndex] + this.throws[throwIndex + 1] <= 10){
    return true
  }
};

Game.prototype.strikeScore = function (throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2])
};

Game.prototype.spareScore = function (throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2])
};

Game.prototype.normalScore = function (throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1])
};


Game.prototype.frameCalc = function(){

  if (this.frameCount > 10) {
    return this.frameCount = 10
  } else {
    return this.frameCount
  }
  return this.frameCalc
}
