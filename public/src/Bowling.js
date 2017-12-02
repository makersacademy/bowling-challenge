// 'use strict';

function BowlingScorecard() {
  this.ZERO = 0
  this.total = this.ZERO;
  this.firstRoll;
  this.secondRoll;
  this.spare = false;
};

BowlingScorecard.prototype.roll = function(pins) {
  this.frame(pins);
};

BowlingScorecard.prototype.frame = function(roll) {
  if (this.firstRoll == null) {
    this.firstRoll = roll;
    this.addSpare(roll);
  } else {
    this.secondRoll = roll;
  }

  this.totalFrame();
};

BowlingScorecard.prototype.totalFrame = function() {
  if (this.firstRoll != null && this.secondRoll != null) {
    var frameTotal = this.firstRoll + this.secondRoll
    this.total += (frameTotal);
    this.isSpare(frameTotal);
    this.firstRoll = null;
    this.secondRoll = null;
  }
}

BowlingScorecard.prototype.isSpare = function(frameTotal) {
  if (frameTotal == 10) {
    this.spare = true;
  }
}

BowlingScorecard.prototype.addSpare = function(roll) {
  if (this.spare == true) {
    this.total += roll;
    this.spare = false;
  }
}
