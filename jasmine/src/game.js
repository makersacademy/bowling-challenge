function BowlingGame() {
  this._game = [];
  this._frame = [];
}

BowlingGame.prototype.game = function() {
  return this._game;
};

BowlingGame.prototype.addToFrame = function(pins) {
    this._frame.push(pins);
  if (this.IsAStrike(this._frame)) {
    this.addToGame(this._frame);}
  else if (this._frame.length === 2)
  this.addToGame(this._frame);
};


BowlingGame.prototype.frame = function() {
  return this._frame;
};

BowlingGame.prototype.addToGame = function(frame) {
  this._game.push(frame);
};

BowlingGame.prototype.IsAStrike = function(frame) {
  return this._frame[0] === 10;
};

BowlingGame.prototype.IsASpare = function(frame) {
  return this._frame[0] + this._frame[1] === 10;
};
