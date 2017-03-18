function Frame() {
  this.roll = 1;
  this.score = 0;
};

Frame.prototype.nextRoll = function() {
  this.roll ++;
};

Frame.prototype.addPoints = function(points) {
  this.score += points;
};
