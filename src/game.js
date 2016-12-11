function Game() {
  this._frames = [];
}

Game.prototype.roll = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};
