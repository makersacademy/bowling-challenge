function Frame() {
  this.bowls = []
  this.bowlIndex = 1
  STRIKE = 10
};

Frame.prototype.bowl = function(pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isAStrike = function() {
  return this.bowls[0] === STRIKE
}
