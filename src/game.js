'use strict';

function Game(){
  this.frameNumber = 1;
  this.totalScore = 0;
  this.TOTAL_FRAMES = 10;
  this.frameScore = []
  this.STRIKE = 10;
};

Game.prototype.getThisFrame = function() {
  return this.frameNumber;
};

Game.prototype.updateFrame = function() {
  this.frameNumber += 1;
}

Game.prototype.calculateFrameScore = function() {
  var frame = new Frame();
  var score = frame.playFrame()
  this.frameScore.push(score)
  var totalFrameScore = score.reduce((a, b) => a + b, 0)
  this.totalScore += totalFrameScore;
};

Game.prototype.completeFrame = function() {
  this.calculateFrameScore();
  if (this.frameNumber > 1) {
    this.bonus();
  }
  this.updateFrame();
};

Game.prototype.getOverallScore = function() {
  return this.totalScore;
};


Game.prototype.playGame = function() {
  if (this.getThisFrame() < this.TOTAL_FRAMES) {
    this.completeFrame();
  } else if (this.getThisFrame() === this.TOTAL_FRAMES) {
    this.playTenthFrame();
  } else {
    return
  };
};

Game.prototype.playTenthFrame = function() {
  var number_two = (this.frameNumber - 2)
  var spare = this.frameScore[number_two][0] + this.frameScore[number_two][1];
  this.calculateFrameScore();
  this.updateFrame();
  if (this.frameScore[9][0] === this.STRIKE) {
    this.calculateFrameScore();
    this.updateFrame()
    this.bonus()
  } else if (spare === 10) {
    this.calcluateFrameScore();
    this.updateFrame();
    this.bonus();
  }
  return;
};

Game.prototype.bonus = function() {
   var number_two = (this.frameNumber - 2)
   var number_one = (this.frameNumber - 1)
   var spare = this.frameScore[number_two][0] + this.frameScore[number_two][1]

  if (this.frameScore[number_two][0] === this.STRIKE) {
    var strikeAdd = this.frameScore[number_one][0] + this.frameScore[number_one][1];
    this.totalScore += strikeAdd;
  } else if (spare === 10) {
    var spareAdd = this.frameScore[number_one][0]
    this.totalScore += spareAdd;
  } else {
    return;
  }
};
