Game = function() {
  this._score = 0;
  this._frame = 1;
  this._frameScore = 0;
  this._frameBowlNumber = 1;
  this._strikeBowlsToCount = 0;
  this._strikeBonus = 0;
};

Game.prototype.inputScore = function(score) {
  this._frameScore += score;
  this.spareBonus(score);
  this.isSpare(score);
  this.strikeBonus(score);
  this.strikeBowlsLeft();
  this.isStrike(score);
  this.nextFrame();
  this._score += score;
  this.gutterGame();
};

Game.prototype.spareBonus = function(score) {
  if (this._spareBowlsToCount > 0) {
    this._score += score;
    this._spareBowlsToCount = 0;
  };
};

Game.prototype.isSpare = function(score) {
  if (this._frameScore === 10 & score !== 10) {
    this._spareBowlsToCount = 1;
  };
};

Game.prototype.strikeBonus = function(score) {
  if (this._strikeBowlsToCount === 3) {
    this._strikeBonus += (score * 2);
  }
  if (this._strikeBowlsToCount !== 0 && this._strikeBowlsToCount !== 3) {
    this._strikeBonus += score;
  };
};

Game.prototype.strikeBowlsLeft = function() {
  if (this._strikeBowlsToCount !== 0) {
    if (this._strikeBowlsToCount === 3) {
      this._strikeBowlsToCount -= 2;
    } else {
      this._strikeBowlsToCount --;
    }
    this.addStrikeBonus();
  };
};

Game.prototype.addStrikeBonus = function() {
  if (this._strikeBowlsToCount === 0) {
    this._score += this._strikeBonus;
    this._strikeBonus = 0;
  };
};

Game.prototype.isStrike = function(score) {
  if (score === 10) {
    this._strikeBowlsToCount += 2;
    this._frame ++;
  } else {
    this._frameBowlNumber ++;
  };
};


Game.prototype.nextFrame = function() {
  if (this._frameBowlNumber > 2) {
    this._frame ++;
    this._frameScore = 0;
    this._frameBowlNumber = 1;
  };
};

Game.prototype.gutterGame = function() {
  if (this._score === 0 & this._frame === 11) {
    this._gutterGame = true;
  };
};

Game.prototype.multipleRolls = function(x, y) {
  for (var i = 0; i < y; i++) {
    this.inputScore(x);
  };
};

Game.prototype.finalFrame = function(score) {
  if (this._frame === 10) {
    if (this._finalStrike === true) {
      this._strikeBonus += score
    }
    
  }
}
