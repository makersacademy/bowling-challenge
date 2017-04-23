'use strict';

function Game() {
  this.score = 0
  this.frameNo = 1
  this.rollCount = 0
  this.rollHistory = []
  this.history = []
  this.frameScores = []
  this.currentFrame = []
}

Game.prototype.reset = function(){
  this.score = 0
  this.frameNo = 1
  this.rollCount = 0
  this.rollHistory = []
  this.history = []
  this.frameScores = []
  this.currentFrame = []
}

Game.prototype.makeRoll = function(points) {
  this.isGameOver();
  this.increaseRollNo(points);
  this.rollHistory.push(points);
  this.currentFrame.push(points);
  if (this.isWhichRoll() === 2){
    this.makeFrame();
  } else {
    // is frame a strike? if so, make frame.
    // if not see if last frame was a spare, make that frame with r1
    // if 2 rolls ago in roll history was strike, make that frame with r1
  }
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
  } else if (this.rollCount % 2 === 1){
    return 1;
  } else {
  return 2;
  }
}

Game.prototype.makeFrame = function(){
  this.history.push(this.currentFrame);
  this.shouldUpdateScore();
  this.nextFrame();
}

Game.prototype.shouldUpdateScore = function(){
  if (this.tallyFrame() < 10) {
    this.updateScore()
  }
}

Game.prototype.tallyFrame = function(){
  return this.currentFrame[0] + this.currentFrame[1]
}

Game.prototype.updateScore = function(){
  this.score += (this.tallyFrame())
  this.frameScores.push(this.score)
}
