'use strict';

function Game(){
  this.currentFrame = 1;
  this.totalScore = 0;
  this.frames = [];
};

Game.prototype.start = function (frame) {
  this.frames[this.currentFrame] = (new frame);
  this.currentFrame++;
};

Game.prototype.newFrame = function () {
  this.start(Frame);
};


function Frame(){
  this.pinsUp = 10;
  this.bowlCount = 0;
  this.score = 0;
};

Frame.prototype.bowl = function (pins) {
  if (this.bowlCount >= 2) { throw new Error ('Too many bowls!'); }
  if (pins > this.pinsUp) { throw new Error ('Too many pins!'); }
  this.pinsUp -= pins;
  this.bowlCount += 1;
  this.score += pins;
};

Frame.prototype.isOver = function () {
  if (this.bowlCount >= 2 || this.pinsUp === 0) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isStrike = function () {
  if (this.bowlCount === 1 && this.score === 10 ) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isSpare = function () {
  if (this.bowlCount === 2 && this.score === 10 ) {
    return true;
  } else {
    return false;
  }
};
