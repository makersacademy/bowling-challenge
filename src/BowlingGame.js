'use strict';

function BowlingGame() {

this.totalScore = 0;

this.framesArray = [
this.frame_one = new BowlingFrame(),
this.frame_two = new BowlingFrame(),
this.frame_three = new BowlingFrame(),
this.frame_four = new BowlingFrame(),
this.frame_five = new BowlingFrame(),
this.frame_six = new BowlingFrame(),
this.frame_seven = new BowlingFrame(),
this.frame_eight = new BowlingFrame(),
this.frame_nine = new BowlingFrame(),
this.frame_ten = new BowlingFrame()
]

this.currentFrameCounter = 0;
this.currentFrame = this.framesArray[this.currentFrameCounter];

}

BowlingGame.prototype.updateCurrentFrame = function() {
  this.currentFrame = this.framesArray[this.currentFrameCounter];
}

BowlingGame.prototype.takeShot = function(points){
  this.currentFrame.addScore(points);
  if (this.currentFrame.isFinished) {
    this.checkSingleStrike();
    this.nextFrame();
  } else {
    this.checkSpare();
    this.checkDoubleStrike();
  }
}

BowlingGame.prototype.nextFrame = function(){
  this.currentFrameCounter += 1;
  this.updateCurrentFrame();
}

BowlingGame.prototype.checkSpare = function() {
  var oneBefore = this.oneBefore();
  if (oneBefore.isSpare) {
    if (this.currentFrame.isStrike) {
      oneBefore.frameScore = 20;
    } else {
      oneBefore.frameScore = (this.currentFrame.first_ball + 10);
    }
  }
}

BowlingGame.prototype.checkSingleStrike = function(){
  var oneBefore = this.oneBefore();
  if (this.currentFrameCounter >= 1) {
    if (oneBefore.isStrike) {
      oneBefore.frame_score = (this.currentFrame.frame_score + 10);
    }
  }
}

BowlingGame.prototype.checkDoubleStrike = function() {
  var oneBefore = this.oneBefore();
  var twoBefore = this.twoBefore();
  if (this.isDoubleStrike) {
    this.checkTripleStrikeAndProcess();
  }
}

BowlingGame.prototype.isDoubleStrike = function(){
  return (oneBefore.isStrike && twoBefore.isStrike);
}

BowlingGame.prototype.checkTripleStrikeAndProcess = function() {
  if (this.currentFrame.isStrike) {
    twoBefore.frame_score = 30
  } else {
    twoBefore.frameScore = (this.currentFrame.first_ball + 20);
  }
}

BowlingGame.prototype.oneBefore = function(){
  return this.framesArray[this.currentFrameCounter - 1];
}

BowlingGame.prototype.twoBefore = function(){
  return this.framesArray[this.currentFrameCounter - 2];
}
