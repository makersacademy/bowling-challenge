function Frame(bowls) {
  this.score = bowls;
};

Frame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

Frame.prototype.isStrike = function() {
  return this.score[0] === 10;
};

Frame.prototype.bonus = function(second_frame, third_frame) {
  if (second_frame && this.isSpare()) {
    return second_frame.score[0];
  } else {
    return 0;
  }
};
