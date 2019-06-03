function Bowling(){
  this.total = 0;
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.score = function() {
  var total = 0;
  var roll = 0;
  var bowling = this;

  for (var frame=0; frame<10; frame++) {
    if (isStrike()) {
      total += bowling.rolls[roll] + this.rolls[roll + 1] + this.rolls[roll + 2];
      roll += 1;
    } else if (isSpare()) {
      total += this.rolls[roll] + this.rolls[roll + 1] + this.rolls[roll + 2];
      roll += 2;
    } else {
      total += this.rolls[roll] + this.rolls[roll + 1];
      roll += 2;
    }

  }

  return total;

  function isStrike() {
    return bowling.rolls[roll] == 10;
  }

  function isSpare() {
    return bowling.rolls[roll] + bowling.rolls[roll + 1] == 10
  }
};
