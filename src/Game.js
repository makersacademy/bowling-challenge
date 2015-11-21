function Game() {
  "use strict";
  this.scores = [];
  this.calcScore = 0;
}

Game.prototype.bowl = function(pins) {
  this.scores.push(pins);
};

Game.prototype.finalScore = function() {
  for (var i = 0; i <= (this.scores.length -1); i++) {
    this.calcScore += this.scores[i];
  }
  return this.calcScore;
};