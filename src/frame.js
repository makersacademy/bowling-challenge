var Frame = function() {
  this.score = 0
  this.pinsLeft = 10;
  this.frameTally = 0;
};

Frame.prototype.bowl = function(score) {
  this.pinsLeft -= score;
  this.scoring(score);
};

Frame.prototype.scoring = function(score) {
  this.score += score;
  this.frameTally++;
  // if (this.firstBowl <= 2) {
  //   this.firstBowl =+ 1;
  // } else {
  //   false
  // };
};
