var Game = function() {
  this.bowls = [];
  this.STARTING_SCORE = 0;
};

Game.prototype.bowl = function(total) {
  this.bowls.push(total);
};

Game.prototype.score = function() {
  result = this.STARTING_SCORE;
  for (var i = 0; i < 20; i++) {
    result += this.bowls[i];
  }
  return result;
};
