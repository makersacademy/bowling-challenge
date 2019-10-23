'use strict';

function Game(){
  this.gameInPlay = true;
  this.cumulativeScore = 0;
  this.frameNumber = 1;
  this.frameScore = {1:[] , 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  this.bonusFrame = {}
  this.bonusScore = 0;
}

Game.prototype.addFrame = function(frame){
  this.frameScore[this.frameNumber] = frame.roll;
  this.frameNumber++;
}

// Game.prototype.getCumulativeScore = function(frame) {
//   // for (var i = 1; i < 11; i++){
//   //   this.cumulativeScore += this.frameScore[i].getCurrentScore()
//   // }
//   let selectedFrame = this.frameScore[this.frameNumber];
//   this.cumulativeScore += selectedFrame.inFrameScore;
//   this.frameNumber++;
// }

Game.prototype.getTotalScore = function(){
  return this.cumulativeScore + this.bonusScore;
}
