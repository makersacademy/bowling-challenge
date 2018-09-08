function Scoreboard() {
  this.scores = [];
};

Scoreboard.prototype.firstRoll = function(number) {
  this.scores[0] = number;
  return console.log(this.scores);
};

Scoreboard.prototype.secondRoll = function(number) {
  this.scores[1] = number;
  return console.log(this.scores);
};
