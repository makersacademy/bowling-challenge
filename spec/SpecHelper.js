Bowling.prototype.fakeShoot = function(pins) {
   this.lastShot = pins;
   this.setPins();
   return this.lastShot;
};