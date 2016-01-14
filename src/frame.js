function Frame(pinsHit, pinsLeft) {
  this.pinsHit = pinsHit || 0;
  this.MAX_PINS = 10;
  this.pinsLeft = pinsLeft || this.MAX_PINS;
}

Frame.prototype.getHit = function(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

Frame.prototype.firstRole = function() {
  this.pinsHit = this.getHit(0,this.MAX_PINS);
  this.pinsLeft = this.MAX_PINS - this.pinsHit;
};

Frame.prototype.secondRole = function() {
  this.pinsHit = this.getHit(0, this.pinsLeft);
  this.pinsLeft -= this.pinsHit;
};

Frame.prototype.resetFrame = function() {
  this.pinsHit =  0;
  this.pinsLeft = this.MAX_PINS;
};
