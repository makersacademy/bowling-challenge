function Frame() {
  this.rolls = [];
  this.score = 0;
};

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return ((this.rolls[0] + this.rolls[1]) === 10);
};

Frame.prototype.roll = function(pins_hit) {
  this.rolls.push(pins_hit);
  if (this.isStrike()) {
    this.rolls[1] = 0;
  };
};

Frame.prototype.isComplete = function() {
  return (this.rolls.length === 2);
};

Frame.prototype.calculateScore = function() {
  this.score = 0;
  for (let i in this.rolls) {
    this.score += this.rolls[i]
  };
  return this.score;
};
