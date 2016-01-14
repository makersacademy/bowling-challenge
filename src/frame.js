function Frame(pinsHit, pinsLeft) {
  this.pinsHit = pinsHit || 0;
  this.MAX_PINS = 10;
  this.pinsLeft = pinsLeft || this.MAX_PINS;
}

Frame.prototype.firstRole = function() {
  this.pinsHit = Math.floor((Math.random()*10));
  this.pinsLeft = this.MAX_PINS - this.pinsHit;
};

// getRollpinsHit = function() {
//   return Math.floor((Math.random()*10));
  // return this.pins.pop(this.pinsHit);
// };

// Frame.prototype.getRollpinsLeft = function() {
  // this.getRollpinsHit();
  // return this.MAX_PINS - this.pinsHit;
  // return this.pinsLeft.splice(1, this.pinsHit);
// };

Frame.prototype.resetFrame = function() {
  this.pinsHit =  0;
  this.pinsLeft = this.MAX_PINS;
};
