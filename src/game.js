function Game () {
  this.bowls = [];
  this.STARTING_SCORE = 0;
  this.bowlIndex = 0;
};

Game.prototype.bowl = function(pins) {
  this.bowls.push(pins);
};

Game.prototype.score = function() {

  bowlIndex = this.bowlIndex;
  result = this.STARTING_SCORE;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.bowls[bowlIndex] + this.bowls[bowlIndex + 1] == 10) {
      result += this.bowls[bowlIndex] + this.bowls[bowlIndex + 1] + this.bowls[bowlIndex + 2];
    } else {
      result += this.bowls[bowlIndex] + this.bowls[bowlIndex + 1];
    }
    bowlIndex += 2;
  }
  return result;
};
