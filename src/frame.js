var Frame = function(rolls) {
  this.MAX_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  });
};

Frame.prototype.total = function(next_frame, next_and_next_frame) {
  return this.rollScore() + this.bonus(next_frame, next_and_next_frame);
};


Frame.prototype.bonus = function(next_frame, next_and_next_frame) {
  if (undefined === next_frame) {
    return 0;
  }
  if (this.isStrike()) {
    return next_frame.strikeBonus(next_and_next_frame);
  }
  if(this.isSpare()) {
    return next_frame.spareBonus();
  }
  return 0;
};

Frame.prototype.isSpare = function() {
  return this.rollScore() == this.MAX_SCORE;
};

Frame.prototype.isStrike = function() {
  return this.firstRoll() == this.MAX_SCORE;
};

Frame.prototype.spareBonus = function() {
  return this.firstRoll();
};

Frame.prototype.strikeBonus = function(next_frame) {
  if(this.isStrike() && next_frame !== undefined) {
    return this.rollScore() + next_frame.firstRoll();
  }
    return this.firstRoll() + this.rolls[1];
};

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};


module.exports = Frame;