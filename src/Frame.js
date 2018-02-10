function Frame() {
  this.bowls = []
  this.isSpare = false
  this.isStrike = false
};

Frame.prototype.enterRoll = function(pins) {
  this.bowls.push(pins)
  this.sumTotal()
  if (this.bowls[0] === 10) {
    this.isStrike = true
  } else if (this.total === 10) {
    this.isSpare = true
  }
};

Frame.prototype.sumTotal = function() {
  this.total = this.bowls.reduce(function(a, b) { return a + b; }, 0);
};
