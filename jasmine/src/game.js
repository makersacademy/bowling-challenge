function BowlingGame() {
  this._game = [];
  this._frame = [];
}

BowlingGame.prototype.game = function() {
  return this._game;
};

BowlingGame.prototype.addToFrame = function(pins) {
  this._frame.push(pins);
};

BowlingGame.prototype.frame = function() {
  return this._frame;
};
