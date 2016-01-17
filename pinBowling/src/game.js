function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
  this._initialPinsThere = this.pin._initialPinsThere;
  this._strikeReserve = 0;
  this._strikeValue = 10;
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
  if (this._strikeReserve >= 1) {
    this.score += number; this._strikeReserve -= 1;
  }
  if (number === 10) {this._strikeReserve += 2}
};
