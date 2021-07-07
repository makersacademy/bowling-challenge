function score(rolls) {
  let total = 0;
  for (let i = 0; i < 18; i++) {
    if (i % 2 === 1) {
      total += rolls[i - 1] + rolls[i];
      if (rolls[i - 1] === 10) {
        total += rolls[i + 1] + rolls[i + 2];
      } else if (rolls[i - 1] + rolls[i] === 10) {
        total += rolls[i + 1];
      }
    }
  }
  for (let i = 18; i < 21; i++) {
    total += rolls[i];
  }
  return total;
}

function Game() {
  this.rolls = Array(21).fill(0);
  this.turn = 0;
}

Game.prototype.roll = function(pins) {
  this.rolls[this.turn] = pins;
  this.turn += 1;
}

Game.prototype.total = function() {
  return score(this.rolls);
}
