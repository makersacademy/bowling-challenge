function Frame() {
  this.points = 0;
  this.pinsStanding = 10;
  this.rolls = 0;
};

Frame.prototype.roll = function(pins) {
  this.pinsStanding -= pins;
  this.points += pins;
  if (this.pinsStanding === 0) {

  }
  return this.points;
};

Frame.prototype._getPoints = function() {
  return this.points;
};
