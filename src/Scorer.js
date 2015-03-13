var Scorer = function() {
  this.rolls = [];
};

Scorer.prototype.roll = function(score) {
  this.rolls.push(score);
};

Scorer.prototype.total = function(first_argument) {
  var numberOfRolls = this.rolls.length;
  var runningTotal = 0;
  for (var i = 0; i < numberOfRolls; i++) {
    if (this.rolls[i]+this.rolls[i+1] ===10){
      runningTotal = runningTotal + this.rolls[i+2];
    };
    runningTotal = runningTotal + this.rolls[i];
  };
  return runningTotal;

};