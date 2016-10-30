'use strict';

var BowlingFrame = require ('./BowlingFrame.js')

function BowlingGame() {

this.totalScore = 0;

this.frame_one = new BowlingFrame();
this.frame_two = new BowlingFrame();
this.frame_three = new BowlingFrame();
this.frame_four = new BowlingFrame();
this.frame_five = new BowlingFrame();
this.frame_six = new BowlingFrame();
this.frame_seven = new BowlingFrame();
this.frame_eight = new BowlingFrame();
this.frame_nine = new BowlingFrame();
this.frame_ten = new BowlingFrame();

this.framesArray = [
  this.frame_one,
  this.frame_two,
  this.frame_three,
  this.frame_four,
  this.frame_five,
  this.frame_six,
  this.frame_seven,
  this.frame_eight,
  this.frame_nine,
  this.frame_ten
]

this.currentFrameCounter = 0;
this.currentFrame = this.framesArray[this.currentFrameCounter];

};

module.exports = BowlingGame;
