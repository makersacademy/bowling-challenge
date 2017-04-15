'use strict';

function Game() {
  this.score = INITIAL_SCORE
  this.frameNo = INITIAL_FRAME_NO
  this.rollNo = INITIAL_ROLL_NO
  this.frameHistory = []
}

const INITIAL_SCORE = 0
const INITIAL_FRAME_NO = 1
const INITIAL_ROLL_NO = 1

Game.prototype.getScore = function(){
  return this.score
}

// Game.prototype.getFrameScore = function(){
//   return this.frameScore
// }

Game.prototype.getFrameNo = function(){
  return this.frameNo
}

Game.prototype.getRollNo = function(){
  return this.rollNo
}

Game.prototype.getFrameHistory = function(){
  return this.frameHistory
}

Game.prototype.makeRoll = function(points){
  this.frameScore += points;
  // frame = []
  this.rollNo += 1;
  this.isNextFrame();
}

Game.prototype.isNextFrame = function(){
  if (this.rollNo === 3){
    this.frameNo += 1;
    this.rollNo = INITIAL_ROLL_NO;
  }
}


