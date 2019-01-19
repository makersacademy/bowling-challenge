function Frame() {
  this.rolls = [];
  this.score = 0;
};

Frame.prototype.roll = function(pins_hit) {
  this.rolls.push(pins_hit);
};

Frame.prototype.calculateFrameScore = function() {
  for(var i in this.rolls) { this.score += this.rolls[i]; }
  return this.score;
};
