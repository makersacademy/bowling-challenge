var Bowling = function() {
  this.rolls = [];
  this.frameNumber = 0;
  this.score = 0;
};

Bowling.prototype.gameRolls = function(pins, number) {
  for( var i = 0; i < number; i += 1) {
    this.roll(pins);
  }
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.currentScore = function() {
  var rollNumber = 0;
  var bowl = this;

  for(this.frameNumber = 0; this.frameNumber < 10; this.frameNumber += 1) {
    if(rollStrike()) {
      this.score += strikeScore();
      rollNumber += 1;
    }
    else if(rollSpare()) {
      this.score += spareScore();
      rollNumber += 2;
    } else {
      this.score += normalScore();
      rollNumber += 2;
    }
  }
  return this.score;

  function rollStrike() {
    return bowl.rolls[rollNumber] == 10;}

  function rollSpare() {
    return bowl.rolls[rollNumber] + bowl.rolls[rollNumber + 1] == 10;}

  function strikeScore() {
    return bowl.rolls[rollNumber] + bowl.rolls[rollNumber + 1] + bowl.rolls[rollNumber + 2];}

  function spareScore() {
    return bowl.rolls[rollNumber] + bowl.rolls[rollNumber + 1] + bowl.rolls[rollNumber + 2];}

  function normalScore() {
    return bowl.rolls[rollNumber] + bowl.rolls[rollNumber + 1];}
};