Game = function() {
  this._score = 0;
  this._frame = 1
  this._frameScore = 0
  this._frameBowlNumber = 1
  this._strikeBowlsToCount = 0
  this._strikeBonus = 0
}

Game.prototype.inputScore = function(score) {
  this._frameScore += score
  if (this._spareBowlsToCount > 0) {
    this._score += score
    this._spareBowlsToCount = 0
  }
  if (this._frameScore === 10 & score !== 10) {
    this._spareBowlsToCount = 1
  }
  if (this._strikeBowlsToCount === 3) {
    this._strikeBonus += (score * 2)
  }
  if (this._strikeBowlsToCount !== 0 && this._strikeBowlsToCount !== 3) {
    this._strikeBonus += score
  }
  if (this._strikeBowlsToCount !== 0) {
    if (this._strikeBowlsToCount === 3) {
      this._strikeBowlsToCount -= 2
    } else {
      this._strikeBowlsToCount --
    }
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
  if (this._frameBowlNumber > 2) {
    this._frame ++;
    this._frameScore = 0;
    this._frameBowlNumber = 1
  };
  this._score += score
  if (this._score === 0 & this._frame === 11) {
    this._gutterGame = true
  }
};

Game.prototype.multipleRolls = function(x, y) {
  for (var i = 0; i < y; i++) {
    this.inputScore(x)
  }
}
