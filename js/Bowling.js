function Bowling(){
  this.rolls = [];
};


Bowling.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Bowling.prototype.gameScore = function () {
  var score = 0;
  var roll = 0;

  for(var frames = 0; frames < 10; frames++) {

    if (this.rolls[roll] == 10) {
      score += this.rolls[roll] + this.rolls[roll+1] + this.rolls[roll+2]
      roll += 1;
    } else if (this.rolls[roll] + this.rolls[roll+1] == 10) {
      score += this.rolls[roll] + this.rolls[roll+1] + this.rolls[roll+2]
      roll += 2;
    } else {
      score += this.rolls[roll] + this.rolls[roll+1]
      roll += 2;
    }

  }

  return score;
};
