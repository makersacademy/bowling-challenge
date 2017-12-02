function Frame() {
  this.bowlOne = null;
  this.bowlTwo = null;
  this.score = [];
  this.spare = false;
  this.strike = false;
};

Frame.prototype.setBowlOneScore = function(score) {
  this.bowlOne = score;
  if (this.bowlOne === 10) {
    this.setBowlTwoScore('-');
  }
};

Frame.prototype.getBowlOneScore = function() {
  return this.bowlOne;
};

Frame.prototype.setBowlTwoScore = function(score) {
  this.bowlTwo = score;
};

Frame.prototype.getBowlTwoScore = function() {
  return this.bowlTwo;
};

Frame.prototype.setFrameScore = function() {
  this.score = []
  this.score.push(this.getBowlOneScore());
  this.score.push(this.getBowlTwoScore());
  if (this.score[0] === 10) {
    this.strike = true;
  } else if (this.score[0] + this.score[1] === 10) {
    this.spare = true;
  }
};

Frame.prototype.getScore = function() {
  return this.score;
};
