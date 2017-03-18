function Frame() {
  this.roll = 1;
  this.score = 0;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.nextRoll = function() {
  this.roll ++;
};

Frame.prototype.addPoints = function(points) {
  this.score += points;
  this.checkStrike();
  this.checkSpare();
  this.nextRoll();
};

Frame.prototype.checkStrike = function() {
  if (this.roll === 1 && this.score === 10) {
    return this.strike = true;
  };
};

Frame.prototype.checkSpare = function() {
  if (this.roll === 2 && this.score === 10) {
    return this.spare = true;
  };
};
