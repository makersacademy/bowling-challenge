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
    this.strike = true;
    this.setBowlTwoScore('-');
  }
};

Frame.prototype.getBowlOneScore = function() {
  return this.bowlOne;
};

Frame.prototype.setBowlTwoScore = function(score) {
  if (this.getBowlOneScore() + score === 10) {
    this.spare = true;
    this.bowlTwo = '/';
  } else {
    this.bowlTwo = score;
  }
};

Frame.prototype.getBowlTwoScore = function() {
  if (this.bowlTwo === '/') {
    return 10 - this.getBowlOneScore();
  } else {
    return this.bowlTwo;
  }
};

Frame.prototype.setFrameScore = function() {
  this.score = []
  this.score.push(this.getBowlOneScore());
  this.score.push(this.getBowlTwoScore());
};

Frame.prototype.getScore = function() {
  return this.score;
};
