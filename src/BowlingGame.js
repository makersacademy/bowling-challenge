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
}
