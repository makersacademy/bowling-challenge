var Bowling = function() {
  this.pins = 10;
  this.lastShot = this.shoot;
   
Bowling.prototype.shoot = function() {
   
   return this.lastShot = (Math.round(Math.random() * 10)); 
}

Bowling.prototype.count = function() {
  if (!isNaN(this.lastShot)) {
    return "First Shot: " + this.lastShot + " - Pins left: " + (this.pins - this.lastShot);
  } else {
   return "Please shoot first" 
  };
}
   
};


