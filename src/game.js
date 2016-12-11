function Game() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};
