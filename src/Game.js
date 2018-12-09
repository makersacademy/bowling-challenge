'use strict';

function Game(){
  this.currentFrame = 1;
  this.totalScore = 0;
  this.frames = [];
};

Game.prototype.start = function (frame) {
  this.frames[this.currentFrame] = (new frame);
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
