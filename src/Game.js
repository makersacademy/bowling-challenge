function Game() {
  this.rolls = [];
};

Game.prototype.throw = function(pins) {
  if (pins === 10) {
    this.rolls.push(pins);
    this.rolls.push(0);
  } else {
    this.rolls.push(pins);
  };
};

Game.prototype.score = function() {
  var result = 0;
  var rollTally = 0;

  for (var frame = 0; frame < 10; frame++) {
    if ((this.rolls[rollTally] == 10) && (this.rolls[rollTally + 1] == 0)) {
      result += this.rolls[rollTally] + this.rolls[rollTally + 1] + this.rolls[rollTally + 2] + this.rolls[rollTally + 3];
    } else if (this.rolls[rollTally] + this.rolls[rollTally + 1] == 10) {
      result += this.rolls[rollTally] + this.rolls[rollTally + 1] + this.rolls[rollTally + 2];
    } else {
      result += this.rolls[rollTally] + this.rolls[rollTally + 1];
    }
    rollTally += 2;
  }
  return result;
};
