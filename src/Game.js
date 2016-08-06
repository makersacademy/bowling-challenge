Game = function() {
  this._score = 0;
  this._frame = 1
  this._frameBowlNumber = 0
  this._strikeBowlsToCount = 0
  this._strikeBonus = 0
}

Game.prototype.inputScore = function(score) {
  if (this._strikeBowlsToCount === 3) {
    this._strikeBonus += (score * 2)
  }
  if (this._strikeBowlsToCount !== 0 && this._strikeBowlsToCount !== 3) {
    this._strikeBonus += score
  }
  if (this._strikeBowlsToCount !== 0) {
    this._strikeBowlsToCount --
    if (this._strikeBowlsToCount === 0) {
      this._score += this._strikeBonus
      this._strikeBonus = 0
    }
  }
  if (score === 10) {
    this._strikeBowlsToCount += 2;
    this._frame ++;
  } else {
    this._frameBowlNumber ++;
  };
  if (this._frameBowlNumber === 2) {
    this._frame ++;
  };
  this._score += score
};
