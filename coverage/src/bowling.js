'use strict';

function Bowling() {
  this._rollsLog = [];
  this._currentFrame = [];
  this._frameCount = 0;
  this._rollCount = 0;
};

Bowling.prototype.addRoll = function(roll) {
  console.log('Frame: ' + (this._frameCount+1) + ', Roll: ' +
  (this._rollCount+1) + ', Pins: ' + roll);

  if (this.isStrike(roll) && this._rollCount === 0) {
    this._rollsLog.push([roll, 0]);

    this._frameCount ++;

  } else if (this._rollCount === 0) {
    this._currentFrame.push(roll);
    this._rollCount ++;

  } else {
    this._currentFrame.push(roll);
    this._rollsLog.push(this._currentFrame);


    this._currentFrame = [];
    this._frameCount ++;
    this._rollCount = 0;
  }

};

Bowling.prototype.returnRolls = function() {
  return this._rollsLog;
};

Bowling.prototype.score = function() {
  this.accumulator = 0;
  this._strikeMultiplier = 1;
  this._spareMultiplier = 1;
  this._prevStrike = false;
  var a = this;

  this._rollsLog.forEach(function(frame, i) {
    if (a._prevStrike && a.isStrike(frame[0])) {
      // a.accumulator = a.accumulator + frame[0]*a._spareMultiplier*a._strikeMultiplier
      // + frame[1]*a._strikeMultiplier;
    } else {
      a.accumulator = a.accumulator + frame[0]*a._spareMultiplier*a._strikeMultiplier
      + frame[1]*a._strikeMultiplier;
    }


    if (a.isStrike(frame[0])) {
      console.log('Strike!.. on frame ' + (i+1));
      a._prevStrike = true;
      a._strikeMultiplier = 2;

    } else if (a.isSpare(frame)) {
      console.log('Spare!.. on frame ' + (i+1));
      a._spareMultiplier = 2;

    } else {
      if (!a._prevStrike) {
        a._strikeMultiplier = 1;
        a._spareMultiplier = 1;
      } else {
        a._prevStrike = false;
      }
    }

  });

  return this.accumulator
};

Bowling.prototype.isStrike = function(roll) {
  if (roll === 10) {
    return true;
  } else {
    return false;
  }
};

Bowling.prototype.isSpare = function(frame) {
  if (frame[0]+frame[1] === 10) {
    return true;
  } else {
    return false;
  }
};
