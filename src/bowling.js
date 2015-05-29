function Player() {
  this.score = 0;
  this.firstHit = 0;
  this.secondHit = 0;
};

Player.prototype.firstBowl = function(pins) {
  this.firstHit = pins;
};

Player.prototype.secondBowl = function(pins) {
  this.secondHit = pins;
};

Player.prototype.calculate = function() {
  this.score = this.firstHit + this.secondHit;
};