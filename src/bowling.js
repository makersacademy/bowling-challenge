"use strict";

function BowlingGame(){
  this.allScores = []

}

BowlingGame.prototype.firstBowl = function() {
  return this.randomNum = Math.round(Math.random()*10)
};

BowlingGame.prototype.secondBowl = function() {
  return this.secondRandomNum =Math.round(Math.random()*(10 - this.randomNum))
};

BowlingGame.prototype.thirdBowl = function() {
  return this.thirdRandomNum = Math.round(Math.random()*10)
};

BowlingGame.prototype.fourthBowl = function() {
  return this.fourthRandomNum = Math.round(Math.random()*(10 - this.thirdRandomNum))
};

BowlingGame.prototype.spare = function() {
  if (this.randomNum + this.secondRandomNum === 10)
  {this.score = this.randomNum + this.secondRandomNum + this.thirdRandomNum}
};

BowlingGame.prototype.strike = function () {
  if (this.randomNum === 10)
  {this.score = this.randomNum + this.thirdRandomNum + this.fourthRandomNum}
};

BowlingGame.prototype.scoresPerFrame = function() {
  this.score = this.randomNum + this.secondRandomNum
};

BowlingGame.prototype.storingScores = function() {
  console.log(this.allScores)
  console.log(this.score)
  return this.allScores.push(this.score)
};

BowlingGame.prototype.totalScore = function() {
  return this.allScores.reduce(this.addingScores,0)
};

BowlingGame.prototype.addingScores = function(a,b) {
  return a+b;
};

BowlingGame.prototype.clearArray = function() {
  if(this.allScores.length > 10)
  {this.allScores.length = 0 }
}
