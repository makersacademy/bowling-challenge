'use strict';

function Game(){
  this.throws = [];
  this.throwCount = 0;
  this.frameCount = 0;
  this.frameScore = [];
}

Game.prototype.score = function() {
  var total = 0;
  var throwIndex = 0;
  for (var i = 0; i < this.frameCalc(); i++) {
    if (this.rollsStrike(throwIndex)) {
      total += (this.strikeScore(throwIndex));
      console.log(this.frameCalc())
      console.log(this.frameScore.push(this.strikeScore(throwIndex)) + ' push')
      console.log(this.frameScore)
      console.log(this.strikeScore(throwIndex))
      throwIndex += 1;
    }
    if (this.rollsSpare(throwIndex)) {
      total += this.spareScore(throwIndex);
      // this.frameScore[this.frameCount] += this.spareScore(throwIndex);
      throwIndex += 2;
    }
    if (this.normalThrow(throwIndex)) {
      total += this.normalScore(throwIndex);
      this.frameScore.push(this.normalScore(throwIndex))
      console.log(this.frameScore.push(this.normalScore(throwIndex)) + ' normal ')
      console.log(this.frameScore)
      throwIndex += 2;
    }
  }

  // console.log(total)
  return total
}

Game.prototype.getFrameScore = function (frameNumber) {
  console.log(this.frameScore[frameNumber + 1])
  return this.frameScore[frameNumber + 1]
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

Game.prototype.shot = function(throwOne, throwTwo = 0){
  if (throwOne === 10){
    this.throws.push(throwOne)
  } else {
  this.throws.push(throwOne, throwTwo)
  }

  this.frameCount += 1
}

Game.prototype.frameCalc = function(){

  if (this.frameCount > 10) {
    return this.frameCount = 10
  } else {
    return this.frameCount
  }
  return this.frameCalc
}


var game = new Game;
for(var i = 0; i < 12; i++){
  game.shot(10)
}
console.log(game.getFrameScore(1))
console.log(game)

// console.log(game.shot(2))
// console.log(game)
