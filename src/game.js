function Game(){
  this.rolls = []
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.totalScore = function () {
  return 0
};
