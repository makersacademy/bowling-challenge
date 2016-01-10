function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
}

Game.prototype.pinsHit = function (number) {
  this.pin.pinsHit(number);
  this.score += number;
};

Game.prototype.getScore = function (first_argument) {
  return this.score;
};
