function Game() {
  this.rolls = [];
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};
