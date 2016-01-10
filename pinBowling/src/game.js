function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
  this._loopLimit = 0;
  this._initialPinsThere = this.pin._initialPinsThere;
  this._strikeBonusTime = 0;
  this._bonusCollection = [];
}

Game.prototype.pinsHit = function (number) {
  this.pin.pinsHit(number);
  this._increaseScore(number);
  if (this._bonusCollection.length !== 0) {
  for (var bonus in this._bonusCollection) {bonus.reduceTimeLimit();}
  this._loopLimit =
    this._bonusCollection.reduce(function(previousValue, currentValue) {
    return previousValue.loopLimit + currentValue.loopLimit;
  });}
  // if (this._strikeBonusTime > 0){this._strikeBonusTime--;}
  // this._strikeEffectOnLoopLimit(number);
};

Game.prototype.getScore = function (first_argument) {
  return this.score;
};

Game.prototype._increaseScore = function (number) {
  for (var i = 0; i < this._loopLimit + 1; i++) {this.score += number;}
};

// Game.prototype._strikeEffectOnLoopLimit = function (number) {
//   if (number >= this._initialPinsThere) {
//     this._strikeBonusTime += 2;
//     this._loopLimit += 1;}
// };
