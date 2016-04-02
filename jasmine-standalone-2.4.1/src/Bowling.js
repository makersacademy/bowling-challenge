'use strict';

function Bowling(){
  var DEFAULT_STANDING_PINS = 10
  var DEFAULT_FRAME = 1
  var DEFAULT_SCORE = 0

  this._standingPins = DEFAULT_STANDING_PINS
  this._currentFrame = DEFAULT_FRAME
  this._currentScore = DEFAULT_SCORE
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

Bowling.prototype.bowl = function (pins) {
  this._standingPins -= pins
  this._currentFrame += 1
  this._currentScore += pins
};
