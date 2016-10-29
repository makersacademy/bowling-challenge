'use strict';

function Scorecard(){
  this.total = 0
  this.frameTotal = 0
  this.frame = 1
  this.roll  = 1
  this.MAX_FRAME_TOTAL = 10
}

Scorecard.prototype.getCurrentScore = function () {
  return this.total;
}

Scorecard.prototype.getFrameScore = function () {
  return this.frameTotal;
}

Scorecard.prototype.getCurrentFrame = function () {
  return this.frame;
}

Scorecard.prototype.getCurrentRoll = function () {
  return this.roll;
}

Scorecard.prototype.updateScore = function (number) {

  if(number === 10 && this.roll === 1){
    this.updateAllTotals(number);
    this.updateFrame();
  } else {
    this.updateAllTotals(number);
    this.updateRoll();
  };
};

Scorecard.prototype.updateAllTotals = function (number) {
  this.total += number;
  this.frameTotal += number;
};

Scorecard.prototype.updateRoll = function () {
  this.roll += 1;
};

Scorecard.prototype.updateFrame = function () {
  this.frame += 1;
};

module.exports = Scorecard;
