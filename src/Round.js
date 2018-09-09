function Round() {
  this.bowls = []
  this.score = 0
  this.strike = false
  this.spare = false
};

Round.prototype.bowl = function(pins) {
  if (this.bowls.length < 2) {
    this.bowls.push(pins)
    this.score += pins
    if (this.score == 10) {
      this.isStrike()
      this.isSpare()
    };
  };
};

Round.prototype.isStrike = function() {
  if (this.bowls[0] == 10) {
    this.strike = true
  };
}

Round.prototype.isSpare = function() {
  if (this.bowls[1] > 0) {
    this.spare = true
  };
};
