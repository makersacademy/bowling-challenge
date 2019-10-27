'use strict';

function Game(){
  this.gameInPlay = true;
  this.frameNumber = 1;
  this.frameScore = {1:[] , 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  this.bonusFrame = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0}
  this.bonusScore = 0;
  this.cumulativeScore = 0;
  this.finalFrameBonus = [];
}

Game.prototype.addFrame = function(frame){
  this.frameScore[this.frameNumber] = frame;
  this.frameNumber++;
  this.calculateFrameBonus();
  console.log(this.frameScore)
}

Game.prototype.getCumulativeScore = function() {
  for (var i = 1; i < 11; i++){
    this.cumulativeScore += this.frameScore[i].inFrameScore;
  }
  return this.cumulativeScore;
}

// for first 8 frames
Game.prototype.calculateFrameBonus = function(){
  // console.log("a", this.bonusFrame)
  for (var i = 1; i < 9; i++){
    if (this.frameScore[i].strike) {
      this.bonusFrame[i] = (this.frameScore[i+1].inFrameScore || 0) + (this.frameScore[i+2].inFrameScore || 0)
      
    } else if (this.frameScore[i].spare){
      this.bonusFrame[i] = this.frameScore[i+1][0]
    }
  }
  this.getSecondLastFrameBonus()
  return this.bonusFrame
}

Game.prototype.getSecondLastFrameBonus = function(){
  // console.log(this.frameScore[9])
  if (this.frameScore[9].strike) {
    this.bonusFrame[9] = (this.frameScore[9].inFrameScore || 0) + (this.frameScore[10].inFrameScore || 0)
  } else if (this.frameScore[9].spare){
    this.bonusFrame[9] = this.frameScore[9][0]
  }   
}

Game.prototype.finalFrameBonusRoll = function(score){
  if (score > 10){
    console.log('Score cannot be greater than 10')

  } else if (this.frameScore[10].strike || this.frameScore[10].spare){
    if (score === 10){
      this.finalFrameBonus.push(score)
      this.lastBonus
    } else {
      this.finalFrameBonus.push(score)
    }
  }
}

Game.prototype.lastBonus = function(score){
  this.finalFrameBonus.push(score)
}

Game.prototype.calculateFinalFrameBonusScore = function(){
  return this.finalFrameBonus.reduce((a, b) => a + b, 0);
}

Game.prototype.calculateBonusScore = function() {
  for (var i = 1; i < 11; i++){
    this.bonusScore += this.bonusFrame[i];
  }
  return this.bonusScore;
}

Game.prototype.getTotalScore = function(){
  return this.getCumulativeScore() + this.calculateBonusScore() + this.calculateFinalFrameBonusScore();
}

