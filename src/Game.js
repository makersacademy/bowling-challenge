'use strict';

function Game(){
  this.currentFrame = 0;
  this.totalScore = 0;
  this.frames = [];
  var i;
  for (i = 0; i < 9; i++) {
    this.frames.push(new Frame);
  }
  this.frames.push(new FinalFrame);
};

Game.prototype.nextFrame = function () {
  if (this.frames[this.currentFrame].isOver() === true) {
    this.totalScore += this._spareBonus();
    this.totalScore += this._strikeBonus();
    this.totalScore += this.frames[this.currentFrame].score;
    this.currentFrame++;
  } else {
    throw new Error ('Too early!')
  }
};

Game.prototype._spareBonus = function () {
  if (typeof this.frames[this.currentFrame-1] === 'undefined') { return 0; }
  if (this.frames[this.currentFrame-1].isSpare() == true) {
    return this.frames[this.currentFrame].firstBowl;
  } else {
    return 0;
  }
};

Game.prototype._strikeBonus = function () {
  if (typeof this.frames[this.currentFrame-1] === 'undefined') { return 0; }
  if (this.frames[this.currentFrame-1].isStrike() == true) {
    return (this.frames[this.currentFrame].firstBowl) +
    (this.frames[this.currentFrame].secondBowl);
  } else {
    return 0;
  }
};



function FinalFrame(){
  this.pinsUp = 10;
  this.bowlCount = 0;
  this.score = 0;
  this.firstBowl = null;
  this.secondBowl = null;
  this.thirdBowl = null;
};

FinalFrame.prototype.bowl = function (pins) {
  if (this.firstBowl != 10) {
    if (this.bowlCount >= 2 ) { throw new Error ('Too many bowls!'); }
    if (pins > this.pinsUp) { throw new Error ('Too many pins!'); }
  }
  this.pinsUp -= pins;
  this.bowlCount += 1;
  if (this.bowlCount === 1) { this.firstBowl = pins; }
  if (this.bowlCount === 2) { this.secondBowl = pins; }
  if (this.bowlCount === 3) { this.thirdBowl = pins; }
  this.score += pins;
};

FinalFrame.prototype.isStrike = function () {
  if (this.bowlCount === 1 && this.score === 10 ) {
    return true;
  } else {
    return false;
  }
};

FinalFrame.prototype.isSpare = function () {
  if (this.bowlCount === 2 && this.score === 10 ) {
    return true;
  } else {
    return false;
  }
};



function Frame(){
  this.pinsUp = 10;
  this.bowlCount = 0;
  this.score = 0;
  this.firstBowl = null;
  this.secondBowl = null;
};

Frame.prototype.bowl = function (pins) {
  if (this.bowlCount >= 2) { throw new Error ('Too many bowls!'); }
  if (pins > this.pinsUp) { throw new Error ('Too many pins!'); }
  this.pinsUp -= pins;
  this.bowlCount += 1;
  if (this.bowlCount === 1) { this.firstBowl = pins; }
  if (this.bowlCount === 2) { this.secondBowl = pins; }
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
