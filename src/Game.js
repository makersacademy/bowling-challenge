function Game() {
  this._rolls = [];
};

Game.prototype.roll = function (pinsDown) {
  this._rolls.push(pinsDown);
};

Game.prototype.score = function () {
  var total = 0;
  var rollIndex = 0;
  for (i = 0; i < 20; i++) {
    total += this._rolls[rollIndex];
    rollIndex ++;
  };
  return total;
};
