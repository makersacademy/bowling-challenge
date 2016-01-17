function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
  this._initialPinsThere = this.pin._initialPinsThere;
  this._strikeReserve = 0;
  this._strikeValue = 10;
  this._round = 1;
  this._prevRoundScore = 0;
  this._spareReserve = 0;
  this._currentScore = 0;
}

Game.prototype.pinsHit = function (number) {
  if (this._round === 1){
    this._round++;
    this._prevRoundScore = 0;
  } else {
    this._round = 1;
  }
  this.pin.pinsHit(number);
  this.score += number;
  this._bonus(number);
  this._prevRoundScore += number;
};

Game.prototype.getScore = function () {
  return this.score;
};

Game.prototype._bonus = function (number) {
  if (this._strikeReserve >= 1) {
    this.score += number;
    this._strikeReserve -= 1;
  }
  if (number === this._strikeValue) {
    this._strikeReserve += 2;
    this._round = 1;
  }
  if (this._spareReserve >= 1) {
    this._spareReserve -= 1;
    this.score += number;
  }
  if ((number + this._prevRoundScore) === this._strikeValue && number !== this._strikeValue) {
    this._spareReserve += 1;
  }

};
