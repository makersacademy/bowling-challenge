var Bowling = function() {
  this.pins = 10;
  this.lastShot = 0;
  this.frame = 0.5;
  this.partialScore = 0
  this.firstShot = true;
  
  
 Bowling.prototype.getScore = function() {
   return this.partialScore;
 };
 
 Bowling.prototype._getFrame = function() {
   return this.frame;
 };
  
 Bowling.prototype._nextFrame = function() {
   this.frame += 1;
   this.resetShot();
   this.pins = 10;
   return this.partialScore += 10;
 };
 
 Bowling.prototype._nextShot = function() {
   this.frame += 0.5;
   this.resetShot();
 };
  
 Bowling.prototype.resetShot = function() {
   (this.firstShot) ? (this.firstShot = false) : (this.firstShot = true);
 };  
  
 Bowling.prototype.setPins = function() {
    this.pins -= this.lastShot;
    if (this.pins === 0 && this.firstShot) {
      this._nextFrame();
    } else if (this.firstShot === true){
      this._nextShot();
      return this.partialScore += this.lastShot; 
    } else {
      this._nextShot();
      this.pins = 10;
      return this.partialScore += this.lastShot;
    };
 }
   
 Bowling.prototype.shoot = function() {
   this.lastShot = (Math.round(Math.random() * this.pins)); 
   this.setPins();
   return this.lastShot;
 }

 Bowling.prototype.count = function() {
  if (!isNaN(this.lastShot) && this.lastShot != 10) {
    return "Shot: " + this.lastShot + " - Pins left: " + (this.pins - this.lastShot);
  } else if (this.lastShot === 10) {
    return "Strike!"
  } else {
    return "Please shoot first" 
  };
 }

};


