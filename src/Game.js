'use strict';

function Game() {
  this.score = 0
  this.frameNo = 1
  this.rollCount = 0
  this.rollHistory = []
  this.literalRollHistory = []
  this.literalRollCount = 0
  this.history = []
  this.frameScores = []
  this.currentFrame = []
  // pins remaining = 10
}

Game.prototype.reset = function(){
  this.score = 0
  this.frameNo = 1
  this.rollCount = 0
  this.literalRollCount = 0
  this.rollHistory = []
  this.literalRollHistory = []
  this.history = []
  this.frameScores = []
  this.currentFrame = []
  // new Game();
}

Game.prototype.isStrike = function(points){
  return points === 10
}

Game.prototype.isFinalFrame = function(){
  return this.frameNo == 10
}

Game.prototype.makeRoll = function(points) {
  // if pins  > pr throw error
  this.isGameOver();
  this.increaseRollNo(points);
  if (points === 10){
    this.rollHistory.push(0);
  }
  this.rollHistory.push(points);
  this.literalRollHistory.push(points);
  this.currentFrame.push(points);
  if (this.isWhichRoll() === 2){
    // if (this.literalRollCount > 2 && this.wasStrike()){
    //   this.score += (10 + points);
    //   this.score += this.literalRollHistory.slice(-2)[0];
    //   this.frameScores.push(this.score)
    // }
    this.makeFrame();
  } else {
    // if not see if last frame was a spare, make that frame with r1
    if (this.frameNo > 1 && this.tallyLast() === 10){
      this.score += (10 + points);
      this.frameScores.push(this.score)
    }
    if (this.literalRollCount > 2 && this.wasStrike()){
      this.score += (10 + points);
      this.score += this.literalRollHistory.slice(-2)[0];
      this.frameScores.push(this.score)
    }
    // if 2 rolls ago in roll history was strike, make that frame with r1
  }
}

Game.prototype.increaseRollNo = function(points){
  if(points !== 10 || this.frameNo === 10){
    this.rollCount += 1;
  }
  else {
    this.rollCount += 2;
  }
  this.literalRollCount += 1;
}

Game.prototype.isWhichRoll = function(){
  if (this.rollCount === 21){
    return 3;
  } else if (this.rollCount % 2 === 1){
    return 1;
  } else {
  return 2;
  }
}

Game.prototype.makeFrame = function(){
  this.history.push(this.currentFrame);
  if (this.literalRollCount > 2 && this.wasStrike()){
    console.log('WAS STRIKE')
    this.score += 10;
    this.updateScore();
  }
  if (this.currentFrame[0] !== 10){
    this.shouldUpdateScore();
  }
  this.nextFrame();
}

Game.prototype.wasStrike = function(){
  return this.literalRollHistory.slice(-3)[0] === 10
}

Game.prototype.shouldUpdateScore = function(){
  if (this.tallyFrame() < 10) {
    this.updateScore();
  }
}

Game.prototype.tallyFrame = function(){
  return this.currentFrame[0] + this.currentFrame[1]
}

Game.prototype.tallyLast = function(){
  if (this.frameNo > 1){
    return this.history.slice(-1)[0][0] + this.history.slice(-1)[0][1]
  }
}

Game.prototype.updateScore = function(){
  this.score += (this.tallyFrame())
  this.frameScores.push(this.score)
}

Game.prototype.nextFrame = function(){
  this.frameNo += 1;
  this.currentFrame = [];
}

Game.prototype.isGameOver = function(){
  if (this.frameNo === 11){
    throw new Error("Game Over")
  }
}
