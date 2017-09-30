function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.allScores = [];
}

Bowling.prototype.currentScore = function(){
  return this.score;
};

Bowling.prototype.roll = function(number) {
  this.score += number;
  this.allScores.push(number);
  if (number === 10) {
    this.allScores.push("X");
  }
};

Bowling.prototype.allRolls = function() {
  return this.allScores;
};
