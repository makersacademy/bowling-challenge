function Game() {
  this.rolls = [];
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.totalScore = function() {
  var total = 0
  var rollNum = this.rolls.length
  for (i = 0; i < rollNum; i++) {
    total += this.rolls[i];
  };
  return total;
}
