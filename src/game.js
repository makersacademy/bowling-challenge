"use strict";

function Game() {
  this.frames =[]
  this.totalScore =0
  this.scores =[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
}


Game.prototype.roll = function(frameNumber, rollNumber) {
  this.frames[frameNumber].roll(this.frames[frameNumber].rolls,rollNumber)
}

Game.prototype.fullFrame = function(frame) {
  for(var count = 0; count < 10; count++) {
    this.addFrame(frame)
  }
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Game.prototype.updateGameScores = function() {
  for(var count = 0; count < 10; count++) {
    this.scores[count] = this.frames[count].score
  }

}
