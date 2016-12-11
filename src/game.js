function Game() {
  this._frames = [];
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};
