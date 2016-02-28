Bowling.prototype.fakeShoot = function(pins) {
   this.lastShot = pins;
   if (this.frame === 10) {
     this.partialScore += this.lastShot;
     this._setFrame(0.5); 
     return this.lastShot;
   }
   if (this.frame === 10.5 && this.strike) {
     this.partialScore += this.lastShot;
     return this.lastShot;
   }
   this.switchShot(); 
   this.setPins();
   return this.lastShot;
};