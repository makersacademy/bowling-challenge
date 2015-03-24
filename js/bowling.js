var Bowling = function() {
  this.rolls = [];
};

Bowling.prototype.gameRolls = function(pins, number) {
  for ( var i = 0; i < number; i++) {
    this.roll(pins);
  }
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.currentScore = function() {
  var score = 0;
  var rollNumber = 0;

  for (var frameNumber = 0; frameNumber < 10; frameNumber++) {
    if(this.rolls[rollNumber] + this.rolls[rollNumber + 1] == 10) {
      score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
    } else {
      score += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
    }
    rollNumber += 2;
  }
  return score;
};