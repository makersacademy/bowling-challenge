function Game() {
  this.gameRolls = [];
}

Game.prototype.roll = function(roll) {
  this.gameRolls.push(roll);
}
