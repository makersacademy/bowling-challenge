'use strict';

function Game() {
  this.score = INITIAL_SCORE
  this.frameNo = INITIAL_FRAME_NO
  this.rollCount = INITIAL_ROLL_COUNT
  this.rollHistory = []
  this.frameHistory = []
  this.frameScores = []
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
  this.rollHistory.push(points);
  this.currentFrame.push(points);
  if (this.isFrameBonus() && this.isFinalFrame()){
    if (this.isWhichRoll() === 3){
      this.makeFrame();
    }
  }
  else if (this.isWhichRoll() === 2){
    if (this.frameNo > 1){
      if (this.isLastFrameStriky()){
        // this and last are striky, add to bonus but dont make frame
        this.bonusPoints += this.tallyFrame()
      }
    }
    this.makeFrame();
  }
  else {
    if (this.frameNo > 1) {
      if (this.isLastFrameSparey()) {
        this.updateScoreWithSpare();
      }
    }
    if (this.frameNo > 2) {
      if (this.isLastFrameStriky() && this.isFrameBeforeStriky()) {
        this.bonusPoints += this.currentFrame[0]
        this.score += this.bonusPoints
        this.bonusPoints = 0
      }
    }
    if (this.isStrike(points)){
      this.makeFrame();
    }
  }
}

Game.prototype.updateScoreWithSpare = function(){
  this.bonusPoints += this.currentFrame[0]
  this.score += this.bonusPoints
  this.bonusPoints = 0
}

Game.prototype.updateScore = function(){
  this.score += (this.tallyFrame() + this.bonusPoints)
  this.frameScores.push(this.score)
  this.bonusPoints = 0
}

Game.prototype.isLastFrameSparey = function(){
  return this.frameHistory.slice(-1)[0][0] + this.frameHistory.slice(-1)[0][1] === 10
}

Game.prototype.isLastFrameStriky = function(){
  return this.frameHistory.slice(-1)[0][0] === 10
}

Game.prototype.isFrameBeforeStriky = function(){
  return this.frameHistory.slice(-2)[0][0] === 10
}

Game.prototype.isFrameBeforeThatStriky = function(){
  return this.frameHistory.slice(-3)[0][0] === 10
}

Game.prototype.makeFrame = function(){
  this.frameHistory.push(this.currentFrame);
  this.shouldUpdateScore();
  this.nextFrame();
}

Game.prototype.nextFrame = function(){
  this.frameNo += 1;
  this.currentFrame = [];
}

Game.prototype.tallyFrame = function(){
  if (this.currentFrame[0] === 10){
    return 10
  }
  else {
    if (this.frameNo > 3 && this.isLastFrameStriky() && this.isFrameBeforeStriky() && this.isFrameBeforeThatStriky()) {
      return this.currentFrame[0] + this.currentFrame[1] + 10
    }
    return this.currentFrame[0] + this.currentFrame[1]
  }
}

Game.prototype.updateBonus = function(){
  this.bonusPoints += 10
}

Game.prototype.shouldUpdateScore = function(){
  if (this.bonusPoints === 20) {
    this.updateScore()
  }
  else if (this.tallyFrame() < 10) {
    this.updateScore()
  }
  else {
    this.updateBonus()
  }
}

Game.prototype.isGameOver = function(){
  if (this.frameNo === 11){
    throw new Error("Game Over")
  }
}


