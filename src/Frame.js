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
    return this.spareBonus(second_frame);
  } else if (second_frame && this.isStrike()) {
    return this.strikeBonus(second_frame, third_frame);
  } else {
    return 0;
  };
};

Frame.prototype.spareBonus = function(second_frame) {
  return second_frame.score[0];
}

Frame.prototype.strikeBonus = function(second_frame, third_frame, half_frame) {
  if (!second_frame.isStrike()) {
    return second_frame.score[0] + second_frame.score[1];
  } else if (third_frame) {
    return second_frame.score[0] + third_frame.score[0];
  } else if (half_frame) {
    return second_frame.score[0] + half_frame;
  } else {
    return 0;
  };
};
