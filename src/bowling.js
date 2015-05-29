function Player() {
  this.score = 0;
  this.firstHit = 0;
  this.secondHit = 0;
};

Player.prototype.firstBowl = function(pins) {
  if(pins > 10) {
    throw new Error('Cannot hit more than 10 pins');
  }
  else {
    this.firstHit = pins;
  }
};

Player.prototype.secondBowl = function(pins) {
  if(this.firstHit == 10) {
    throw new Error('Cannot bowl twice on a strike');
  }
  else if(pins + this.firstHit > 10) {
    throw new Error('Cannot hit more than 10 pins');
  }
  else {
  this.secondHit = pins;
  }
};

Player.prototype.calculate = function() {
  this.score = this.firstHit + this.secondHit;
};