function Frame(bowls) {
  this.score = bowls;
};

Frame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

Frame.prototype.isStrike = function() {
  return this.score[0] === 10 && this.score.length === 1;
};

Frame.prototype.strikeBonus = function(next_frame, third_frame, half_frame) {
  if (game.finalFrame === next_frame) { return game.storedBowl + half_frame };
  if (next_frame) {
    var base_score = next_frame.score[0];
    if (!next_frame.isStrike()) { return base_score + next_frame.score[1] };
    if (third_frame) { return base_score + third_frame.score[0] };
    if (half_frame) { return base_score + half_frame };
  };
  return null;
};

Frame.prototype.spareBonus = function(next_frame, half_frame) {
  if (next_frame) { return next_frame.score[0] };
  if (half_frame || half_frame === 0) { return half_frame };
  return null;
};
