function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
  this._initialPinsThere = this.pin._initialPinsThere;
  this.reserve = 0;
}

Game.prototype.pinsHit = function (number) {
  this.pin.pinsHit(number);
  this.score += number;
  this._bonus(number);
};

Game.prototype.getScore = function () {
  return this.score;
};

Game.prototype._bonus = function (number) {
  if (this.reserve >= 10) {this.score += number; this.reserve -= 10}
  if (number === 10) {this.reserve += 10*2}
};
