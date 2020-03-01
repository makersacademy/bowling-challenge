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
  this.pinsRemaining = 10
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
  this.pinsRemaining = 10
  // new Game();
}

Game.prototype.isStrike = function(points){
  return points === 10
}

Game.prototype.isFinalFrame = function(){
  return this.frameNo == 10
}

Game.prototype.makeRoll = function(points) {
  this.updatePins(points);
  this.increaseRollNo(points);
  if (points === 10){
    this.rollHistory.push(0);
  }
  this.rollHistory.push(points);
  this.literalRollHistory.push(points);
  this.currentFrame.push(points);
  if (this.isWhichRoll() === 2){
    if (this.literalRollCount > 2 && this.wasStrike()){
      this.score += (10 + points);
      this.score += this.literalRollHistory.slice(-2)[0];
      this.frameScores.push(this.score);
      this.makeFrame();
    } else {
      this.makeFrame();
    }
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
  this.finalframePins();
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
    this.updateScore();
  } else if (this.currentFrame[0] !== 10){
    this.shouldUpdateScore();
  }
  this.nextFrame();
  this.pinsRemaining = 10
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
  if (this.currentFrame[0] !== 10){
    this.score += (this.tallyFrame());
    this.frameScores.push(this.score);
  }
  console.log("this.score")
  console.log(this.score)
  console.log("this.frameNo")
  console.log(this.frameNo)
  console.log("this.rollCount")
  console.log(this.rollCount)
  console.log("this.rollHistory")
  console.log(this.rollHistory)
  console.log("this.literalRollHistory")
  console.log(this.literalRollHistory)
  console.log("this.literalRollCount")
  console.log(this.literalRollCount)
  console.log("this.history")
  console.log(this.history)
  console.log("frameScores")
  console.log(this.frameScores)
  console.log("this.currentFrame")
  console.log(this.currentFrame)
  console.log("this.pinsRemaining")
  console.log(this.pinsRemaining)
}

Game.prototype.nextFrame = function(){
  this.frameNo += 1;
  this.currentFrame = [];
}

Game.prototype.updatePins = function(points){
  if (points > this.pinsRemaining) {
    throw new Error("Roll cannot exceed pins remaining")
  }
  this.pinsRemaining -= points;
}

Game.prototype.finalframePins = function(points){
  if (this.frameNo === 10 && this.currentFrame[0] === 10) {
    this.pinsRemaining = 10;
  } else if (this.frameNo === 10 && this.currentFrame[0] +this.currentFrame[1] === 10) {
    this.pinsRemaining = 10;
  } else {
    return;
  }
}
