function Frame() {
  this.bowlOne = null;
  this.bowlTwo = null;
  this.score = [];
};

Frame.prototype.setBowlOneScore = function(score) {
  this.bowlOne = score;
};

Frame.prototype.getBowlOneScore = function() {
  return this.bowlOne;
};

Frame.prototype.setBowlTwoScore = function (score) {
  this.bowlTwo = score;
};

Frame.prototype.getBowlTwoScore = function () {
  return this.bowlTwo;
};

Frame.prototype.setScore = function () {
  this.score = []
  this.score.push(this.getBowlOneScore());
  this.score.push(this.getBowlTwoScore());
};

Frame.prototype.getScore = function () {
  return this.score;
};
