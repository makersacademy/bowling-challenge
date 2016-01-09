function Game() {
  this.score = 0;
}

Game.prototype.knockDownPins = function(number) {
  this.score += number;
};

Game.prototype.getScore = function() {
  return this.score;
};
