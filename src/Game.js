Game = function() {
  this._currentScore = 0
  this._frame = 1
  this._frameBowlCount = 0
  this._strike = false
  this._postStrikeNumber = 0
  this._strikeBonus = 0
}

Game.prototype.inputScore = function(number) {
  this._currentScore += number;
  this._frameBowlCount += 1
  if (this._strike === true) {
    this._strikeBonus += number;
    this._postStrikeNumber += 1
    if (this._postStrikeNumber === 2) {
      this._currentScore += this._strikeBonus;
      this._strikeBonus = 0
      this._postStrikeNumber = 0
      this._strike = false
    };
  };
  if (this._frameBowlCount === 2) {
    this.nextFrame()
  };
};

Game.prototype.nextFrame = function () {
  this._frame += 1;
  this._frameBowlCount = 0;
};

Game.prototype.strike = function () {
  if (game._strike === true) {
    game._strikeBonus += 10
  }
  this._currentScore += 10;
  this.nextFrame();
  this._strike = true;
};
