function Bowling(){
  this.total = 0;
  this.frame = 0;
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
    this.frame += 0.5;
};

Bowling.prototype.score = function() {
  var total = 0;
  var roll = 0;
  var bowling = this;

  for (var frame=0; frame<10; frame++) {
    if (isSpare()) {
      total += this.rolls[roll] + this.rolls[roll + 1] + this.rolls[roll + 2];
    } else {
      total += this.rolls[roll] + this.rolls[roll + 1];
    }
    roll += 2;
  }

  return total;

  function isSpare() {
    return bowling.rolls[roll] + bowling.rolls[roll + 1] == 10
  }
};
