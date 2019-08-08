'use strict';

function Game(){
  this.throws = [];
  this.frameCount = 0;
  this.frameScore = [];
  this.ballLive = false;
  this.scoreCard = []
}

Game.prototype.score = function() {
  var total = 0;
  var throwIndex = 0;
  this.frameScore = []
  for (var i = 0; i < this.frameCalc(); i++) {
    if (this.rollsStrike(throwIndex)) {
      total += (this.strikeScore(throwIndex));
      this.frameScore.push(this.strikeScore(throwIndex))
      throwIndex += 1;
    }
    if (this.rollsSpare(throwIndex)) {
      total += this.spareScore(throwIndex);
      this.frameScore.push(this.spareScore(throwIndex))
      throwIndex += 2;
    }
    if (this.normalThrow(throwIndex)) {
      total += this.normalScore(throwIndex);
      this.frameScore.push(this.normalScore(throwIndex))
      throwIndex += 2;
    }
  }
  // || 0 will convert any falsey value to 0
  return total || 0
}

Game.prototype.throwScore = function (throwNumber) {
  if (this.scoreCard[throwNumber - 1] == 10){
    return "X"
  } else {
    return this.scoreCard[throwNumber - 1] }
};

Game.prototype.getFrameScore = function (frameNumber) {
  // || 0 will convert any falsey value to 0
  return this.frameScore[frameNumber - 1] || 0
};

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

Game.prototype.strikeScore = function(throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2])
};

Game.prototype.spareScore = function (throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2])
};

Game.prototype.normalScore = function (throwIndex) {
  return (this.throws[throwIndex] + this.throws[throwIndex + 1])
};

Game.prototype.shot = function(throwOne){
  if (throwOne === 10 && this.ballLive === false){
    this.frameCount += 1
    this.ballLive = false
    this.scoreCard.push(throwOne , 0)
  } else if (this.ballLive === true){
    this.frameCount += 1
    this.ballLive = false
    this.scoreCard.push(throwOne)
  } else {
    this.ballLive = true
    this.scoreCard.push(throwOne)
    }
  this.throws.push(throwOne)

}

Game.prototype.frameCalc = function(){
  if (this.frameCount > 10) {
    return this.frameCount = 10
  } else {
    return this.frameCount
  }
  return this.frameCalc
}
