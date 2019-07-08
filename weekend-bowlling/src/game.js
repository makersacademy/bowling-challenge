'use strict'
function Game() {
  this.totalScore = 0;
  this.allFrames = []
  this.frame = []
  this.bonus = {}
  this.indexInFrame = 0
  this.currentFrame = 0


  this.getTotalScore = function() {
    this.totalScore = this.allFrames.flat(1)
    this.totalScore = this.totalScore.reduce(function(acc, val){
      return acc + val }, 0)
    return this.totalScore;
  };

  this.finishFrame = function() {
    this.allFrames.splice(this.currentFrame, 0, this.frame)
    console.log(this.allFrames)
    return this.allFrames
  }

  this.roll = function(pins){
      if (this.indexInFrame > 1) {
        this.indexInFrame = 0
        this.currentFrame ++
        this.finishFrame()
        this.frame = []
      }
      if (this.indexInFrame <= 1) {
        this.frame[this.indexInFrame] = pins;
        this.indexInFrame ++
        return this.frame
      }

  };
};
