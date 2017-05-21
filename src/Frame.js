function Frame(bowls) {
  this.score = bowls;
};

Frame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

Frame.prototype.isStrike = function() {
  return this.score[0] === 10 && this.score.length === 1;
};

Frame.prototype.bonus = function(second_frame, third_frame, unfinished_frame) {
  if (this.isStrike() && second_frame && second_frame.isStrike() && unfinished_frame === 0) {
    return 10 + unfinished_frame;
  };
  if (!this.isStrike() && !this.isSpare()) {
    return 0;
  } else if (this.isSpare() && !second_frame && unfinished_frame === 0) {
    return 0;
  } else if (second_frame && this.isSpare()) {
    return this.spareBonus(second_frame);
  } else if (this.isStrike() && second_frame && !second_frame.isStrike()) {
    return second_frame.score[0] + second_frame.score[1];
  } else if (second_frame && second_frame.isStrike() && third_frame) {
    return second_frame.score[0] + third_frame.score[0];
  } else if (this.isStrike() && game.finalFrame.score.length >= 2) {
    return game.storedBowl + game.currentFrame;
  } else if (second_frame && unfinished_frame && this.isStrike()) {
    return second_frame.score[0] + unfinished_frame;
  } else if (second_frame && this.isStrike()) {
    return this.strikeBonus(second_frame, third_frame, unfinished_frame);
  } else if (unfinished_frame && this.isSpare()) {
    return unfinished_frame;
  } else {
    return null;
  };
};

Frame.prototype.spareBonus = function(second_frame) {
  return second_frame.score[0];
}

Frame.prototype.strikeBonus = function(second_frame, third_frame, unfinished_frame) {
  if (!second_frame.isStrike()) {
    return second_frame.score[0] + second_frame.score[1];
  } else if (third_frame) {
    return second_frame.score[0] + third_frame.score[0]
  } else {
    return null;
  };
};
