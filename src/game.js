function Game() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};

Game.prototype.frameScore = function() {
  for (var i = 0; i < this._frames.length; i++) {
    this._scores.push(this._frames[i]._firstRoll + this._frames[i]._secondRoll);
  }
};
