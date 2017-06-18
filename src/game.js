"use strict";

function Game() {
  this.frames =[]
  this.totalScore =0
  this.scores =[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  this.frametotals = [0,0,0,0,0,0,0,0,0,0]
}

Game.prototype.roll = function(frameNumber, rollNumber) {
  this.frames[frameNumber].roll(this.frames[frameNumber].rolls, rollNumber)
}

Game.prototype.fullFrame = function(frame) {
  for(var count = 0; count < 10; count++) {
    this.addFrame(frame)
  }
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Game.prototype.updateGameScores = function(frameNumber) {
    this.scores[frameNumber] = this.getFrameScore(frameNumber)
}

Game.prototype.updateFrameTotals = function(frameNumber) {
  this.frametotals[frameNumber] = this.getFrameScore(frameNumber)[0] + this.getFrameScore(frameNumber)[1]
    if(frameNumber > 0) {
       if(this.checkPreviousResult(frameNumber)){
         this.updatePreviousFrameTotals(frameNumber)
     }
   }
 }

Game.prototype.updatePreviousFrameTotals = function(frameNumber) {
  if(this.frames[frameNumber - 1].strike()) {
    this.frametotals[frameNumber-1] += this.getFrameScore(frameNumber)[0] + this.getFrameScore(frameNumber)[1]
  }else if(this.frames[frameNumber - 1].spare()) {
    this.frametotals[frameNumber-1] += this.getFrameScore(frameNumber)[0]
  }
}

Game.prototype.getFrameScore = function(frameNumber) {
  return this.frames[frameNumber].score
}

Game.prototype.checkPreviousResult = function(frameNumber) {
  return (this.frames[frameNumber - 1].strike() ||this.frames[frameNumber - 1].spare())
}

Game.prototype.tenthFrameTest= function() {
  if(this.frames[9].spare()){
    this.frames[9].addRoll()
  }
}
