function Frame() {
  this.bowls = []
};

Frame.prototype.bowl = function(firstBowl, secondBowl) {
  this.bowls = [firstBowl, secondBowl];
};

Frame.prototype.isAStrike = function() {
  return this.bowls[0] === 10;
};

Frame.prototype.isASpare = function() {
  return this.bowls[0] + this.bowls[1] == 10 && !(this.isAStrike());
};

Frame.prototype.isAGutterBall = function() {
  return this.bowls[0] == 0 && this.bowls[1] == 0;
};
