'use strict';

function Game() {
  this.score = INITIAL_SCORE
  this.frameNo = INITIAL_FRAME_NO
  this.rollCount = INITIAL_ROLL_COUNT
  this.frameHistory = []
  this.currentFrame = []
  this.bonusPoints = INITIAL_BONUS_POINTS
}

const INITIAL_SCORE = 0
const INITIAL_FRAME_NO = 1
const INITIAL_ROLL_COUNT = 0
const INITIAL_BONUS_POINTS = 0

Game.prototype.getScore = function(){
  return this.score
}

Game.prototype.getFrameNo = function(){
  return this.frameNo
}

Game.prototype.getRollCount = function(){
  return this.rollCount
}

Game.prototype.getFrameHistory = function(){
  return this.frameHistory
}

Game.prototype.getBonusPoints = function(){
  return this.bonusPoints
}

Game.prototype.makeRoll = function(points){
  this.increaseRollNo();
  this.currentFrame.push(points);
  if (this.isWhichRoll() === 2){
    this.makeFrame();
  }
  else {
    if (this.isStrike(points)){
      this.makeFrame();
    }
  }
}

Game.prototype.increaseRollNo = function(){
  this.rollCount += 1;
}

Game.prototype.isWhichRoll = function(){
  if (this.rollCount % 2 === 1){
    return 1;
  }
  return 2;
}

Game.prototype.isStrike = function(points){
  return points === 10
}

Game.prototype.isFrameBonus = function(){
  return this.currentFrame[0] === 10 || this.currentFrame[0] + this.currentFrame[1] === 10
}

Game.prototype.isPreviousBonus = function(){
  return this.frameHistory.slice(-1)[0][0] === 10 || this.frameHistory.slice(-1)[0][0] + this.frameHistory.slice(-1)[0][1] === 10
}

Game.prototype.isFinalFrame = function(){
  return this.frameNo == 10
}

Game.prototype.strikeOrSpare = function(){
  console.log(this.currentFrame)
  if(this.currentFrame[0] === 10){
    return 'strike'
  } else {
    return 'spare'
  }
}

Game.prototype.makeFrame = function(){
  if (this.isFrameBonus()){
    if (this.isFinalFrame()){
      // which kind of bonus? if spare 1 more roll. if strike 2 more rolls.
      this.strikeOrSpare();
    } else {
      this.frameHistory.push(this.currentFrame);
      this.nextFrame();
    }
  } else {
    this.frameHistory.push(this.currentFrame);
    this.nextFrame();
  }
}

Game.prototype.nextFrame = function(){
  this.frameNo += 1;
  this.currentFrame = [];
}



