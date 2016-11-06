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

BowlingGame.prototype.takeShot = function(points){
  this.currentFrame.addScore(points);
  if (this.currentFrame.isFinished) {
    this.checkStrike();
    this.nextFrame();
  }
}

BowlingGame.prototype.nextFrame = function(){
  this.currentFrameCounter += 1;
  this.currentFrame = this.framesArray[this.currentFrameCounter];
}

BowlingGame.prototype.checkStrike = function() {
var oneBefore = this.oneBefore();
var twoBefore = this.twoBefore();
  if (this.currentFrameCounter >= 3) {
    if (twoBefore.isStrike) {
      twoBefore.frame_score = (this.currentFrame.frame_score + oneBefore.frame_score + 10);
    }
  }
}

BowlingGame.prototype.twoBefore = function(){
  return this.framesArray[this.currentFrameCounter - 2];
}

BowlingGame.prototype.oneBefore = function(){
  return this.framesArray[this.currentFrameCounter - 1];
}
