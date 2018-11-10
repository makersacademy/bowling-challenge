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

Game.prototype.isSpare = function() {
  var index = 0
  if (this.rolls[index] + this.rolls[index + 1] === 10) {
    return true
  } else {
    return false
  }
}
