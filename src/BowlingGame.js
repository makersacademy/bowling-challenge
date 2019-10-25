'use strict';

function BowlingGame() {
  this.allFrames = {"-1": [], 0: [], 1: [], 2: [], 3: [], 4: [], 5: [],
    6: [], 7: [], 8: [], 9: [], 10:[]
  };
  this.allFramesScore = {1: [], 2: [], 3: [], 4: [], 5: [],
    6: [], 7: [], 8: [], 9: [], 10:[]
    };
  this.currentFrame = 1;
  this.previousFrame = 0;
  this.previous2Frame = -1;
};

BowlingGame.prototype.bowl = function(number) {
  this.frameNumber();
  this.allFrames[this.currentFrame].push(number)
  this.calculateFrame();
};

BowlingGame.prototype.frameNumber = function() {
  if(this.allFrames[this.currentFrame].length == 2 || this.allFrames[this.currentFrame].includes(10)) {
    this.currentFrame += 1
    this.previousFrame += 1
    this.previous2Frame += 1
  };
};

BowlingGame.prototype.calculateFrame = function() {
  if(this.allFrames[this.previousFrame][0] == 10 && this.previousFrame > 0 && this.allFrames[this.currentFrame].length == 2) {
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][0]);
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][1]);
    this.calculate(this.previousFrame);
  };
  if(this.allFrames[this.previous2Frame][0] == 10 && this.allFrames[this.previousFrame][0] == 10 && this.allFrames[this.previousFrame].length < 3) {
    this.allFrames[this.previous2Frame].push(this.allFrames[this.previousFrame][0]);
    this.allFrames[this.previous2Frame].push(this.allFrames[this.currentFrame][0]);
    this.calculate(this.previous2Frame);
  };
  if(this.allFrames[this.previousFrame][0] + this.allFrames[this.previousFrame][1] == 10 && this.allFrames[this.previousFrame].length < 3) {
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][0]);
    this.calculate(this.previousFrame);
  };
  if(this.allFrames[this.previousFrame][0] + this.allFrames[this.previousFrame][1] < 10) {
    this.calculate(this.previousFrame);
  };
};

BowlingGame.prototype.calculate = function(frameNumber) {
  var frame = this.allFrames[frameNumber];
  var sum = 0;
  var i = 0;
  for (i = 0; i < frame.length; i++) {
    sum += frame[i];
  };
  this.allFramesScore[frameNumber] = sum;
};
