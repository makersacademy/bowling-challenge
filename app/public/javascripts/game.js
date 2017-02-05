function Game() {
  this._rolls = []
}

Game.prototype.addRoll = function(roll) {
  this._rolls.push(roll);
};

Game.prototype.getRolls = function() {
  return this._rolls;
};

module.exports = Game;
