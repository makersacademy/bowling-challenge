var Bowling = function() {
  this.currentScore = 0;
  this.gutterGame = 0
};

Bowling.prototype.currentScore = function() {
  this.currentScore;
};

Bowling.prototype.gutterGame = function() {
  this.gutterGame;
};

Bowling.prototype.roll = function(pins){
  this.currentScore += pins;
};