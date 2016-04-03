'use strict';

function Bowling(){
  var DEFAULT_STANDING_PINS = 10
  var DEFAULT_FRAME = 1
  var DEFAULT_SCORE = 0
  var DEFAULT_BOWL = 1

  this._standingPins = DEFAULT_STANDING_PINS
  this._currentFrame = DEFAULT_FRAME
  this._currentScore = DEFAULT_SCORE
  this._currentBowl = DEFAULT_BOWL
}

Bowling.prototype.getStandingPins = function (){
  return this._standingPins
};

Bowling.prototype.getCurrentFrame = function (){
  return this._currentFrame
};

Bowling.prototype.getCurrentScore = function () {
  return this._currentScore
};

Bowling.prototype.getCurrentBowl = function (){
  return this._currentBowl
};

Bowling.prototype.successfulBowl = function (pins){
  this._standingPins -= pins
  this._currentScore += pins
};

Bowling.prototype.frameUpdater = function (){
  if (this._currentFrame < 10) {
    this._currentFrame += 1
  } else {
    throw new Error('game is over');
  }
};

Bowling.prototype.hitConfirm = function (pins) {
  console.log("you just hit " + pins + " pins!")
};

Bowling.prototype.strikeConfirm = function (){
  console.log("you just striked!")
};

Bowling.prototype.bowl = function (pins) {
  if (pins === 10) {
    this.strikeConfirm()
    this.successfulBowl(pins)
    this.frameUpdater()
  } else {
    this.successfulBowl(pins)
    this._currentBowl += 1
    this.hitConfirm(pins)
  }

};
