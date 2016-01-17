function Game (pin, defaultScore) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
  this._DEFAULT_SCORE = defaultScore || 0;
  this.score = this._DEFAULT_SCORE;
  this._initialPinsThere = this.pin._initialPinsThere;
  this._strikeReserve = this._prevRoundScore = this._spareReserve = this._currentScore = 0;
  this._strikeValue = 10;
  this._round = 1;
}

Game.prototype.getScore = function () {
  return this.score;
};

Game.prototype.pinsHit = function (number) {
  this.setRound();
  this.pin.pinsHit(number);
  this.score += number;
  this._bonus(number);
  this._prevRoundScore += number;
};

Game.prototype.setRound = function () {
  if (this._round === 1){
    this._round++;
    this._prevRoundScore = 0;
  } else {
    this._round = 1;
  }
};

Game.prototype._bonus = function (number) {
  this._strikeBonus(number);
  this._rememberStrike(number);
  this._spareBonus(number);
  this._rememberSpare(number);
};

Game.prototype._strikeBonus = function (number) {
  if (this._strikeReserve >= 1) {
    this.score += number;
    this._strikeReserve -= 1;
  }
};

Game.prototype._rememberStrike = function (number) {
  if (number === this._strikeValue) {
    this._strikeReserve += 2;
    this._round = 1;
  }
};

Game.prototype._spareBonus = function (number) {
  if (this._spareReserve >= 1) {
    this._spareReserve -= 1;
    this.score += number;
  }
};

Game.prototype._rememberSpare = function (number) {
  if (this._hasSumForSpare(number) && this._notStrike(number)) {
    this._spareReserve += 1;
  }
};

Game.prototype._hasSumForSpare = function (number) {
  return (number + this._prevRoundScore) === this._strikeValue
};

Game.prototype._notStrike = function (number) {
  return number !== this._strikeValue
};
