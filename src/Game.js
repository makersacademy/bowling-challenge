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


Game.prototype.increaseRollNo = function(points){
  if(points !== 10 || this.frameNo === 10){
    this.rollCount +=1;
  }
  else {
    this.rollCount += 2;
  }
}

Game.prototype.isWhichRoll = function(){
  if (this.rollCount === 21){
    return 3;
  }
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
  if(this.currentFrame[0] === 10){
    return 'strike'
    //add points to bonus tally
  } else {
    return 'spare'
    //add points to bonus tally
  }
}

Game.prototype.makeRoll = function(points){
  this.isGameOver();
  this.increaseRollNo(points);
  this.currentFrame.push(points);
  if (this.isFrameBonus() && this.isFinalFrame()){
    if (this.isWhichRoll() === 3){
      this.makeFrame();
    }
  }
  else if (this.isWhichRoll() === 2){
    this.makeFrame();
  }
  else {
    if (this.isStrike(points)){
      this.makeFrame();
    }
  }
}

Game.prototype.makeFrame = function(){
  // later: if is bonus but not final, dont want to store the score
  this.frameHistory.push(this.currentFrame);
  this.nextFrame();
}

Game.prototype.nextFrame = function(){
  this.tallyFrame();
  this.frameNo += 1;
  this.currentFrame = [];
}

Game.prototype.tallyFrame = function(){
  if (this.currentFrame[0] === 10){
    this.score += 10
  } else {
  this.score += (this.currentFrame[0] + this.currentFrame[1])
  }
}

Game.prototype.isGameOver = function(){
  if (this.frameNo === 11){
    throw new Error("Game Over")
  }
}


