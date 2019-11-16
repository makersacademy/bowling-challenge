function Game() {
  this.rollScore = [];
};

Game.prototype.roll = function(pins) {
  this.rollScore.push(pins);
};
