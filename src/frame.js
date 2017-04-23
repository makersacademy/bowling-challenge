function Frame() {
  this.bowled = [];
  this.timesBowled = 0;
  this.MAX_BOWL_ALLOWANCE = 2;
  this.pins = 10;
}

Frame.prototype.addToScore = function addToScore(pins) {
  this.bowled.push(pins);
};

Frame.prototype.bowl = function bowl(pins) {
  this.addToScore(pins);
  this.incrementBowl();
  this.pins -= pins;
  return pins;
};

Frame.prototype.frameScore = function frameScore() {
  return this.bowled.reduce((a, b) => a + b, 0);
};

Frame.prototype.isFirstBowl = function isFirstBowl() {
  return this.timesBowled === 0;
};

Frame.prototype.incrementBowl = function incrementBowl() {
  this.timesBowled += 1;
};

Frame.prototype.canBowl = function canBowl() {
  return (this.timesBowled < this.MAX_BOWL_ALLOWANCE);
};

Frame.prototype.isStrike = function isStrike() {
  return (this.pins === 0 && this.timesBowled === 1);
};

Frame.prototype.isSpare = function isSpare() {
  return (this.pins === 0 && this.timesBowled === 2);
};
