var Frame = function() {
  this.frameScore = 0;
  this.skittlesRemaining = 10;
};

// Frame.prototype.play = function() {
//   score = bowl();
//   this.frameScore += score;
//   this.skittlesRemaining -= score;
// };

Frame.prototype.bowl = function() {
  score = Math.floor(Math.random() * (this.skittlesRemaining + 1));
  this.frameScore += score;
  this.skittlesRemaining -= score;
  return score;
};
