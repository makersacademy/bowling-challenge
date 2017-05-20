function Frame(bowls) {
  this.score = bowls;
};

Frame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

Frame.prototype.isStrike = function() {
  return this.score[0] === 10;
};

Frame.prototype.calculate = function() {
  if (this.score.length === 1) {
    return this.score[0];
  } else {
    return this.score[0] + this.score[1];
  };
};
