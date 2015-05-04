var Frame = function() {
  this.frameScore = 0;
  this.skittlesRemaining = 10;
};

Frame.prototype.play = function() {
  score = this.bowl();
  this.frameScore += score;
  this.skittlesRemaining -= score;
  if(this.skittlesRemaining === 0) {
    return 'Strike';
  }
};

Frame.prototype.bowl = function() {
  score = Math.floor(Math.random() * (this.skittlesRemaining + 1));
  this.frameScore += score;
  this.skittlesRemaining -= score;
  return score;
};
