function Game() {
  this.rolls = [];
}

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.totalScore = function() {
  var total = 0
  var rollNum = this.rolls.length
  for (var i = 0; i < rollNum; i++) {
    if (this.isSpare(i)) {
      total += (this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2]);
      console.log(total)
      i++
    } else {
      total += this.rolls[i];
    }
  };
  return total
}

Game.prototype.isSpare = function(index) {
  if (this.rolls[index] + this.rolls[index + 1] === 10) {
    return true
  } else {
    return false
  }
}
