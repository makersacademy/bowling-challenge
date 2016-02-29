var Bowling = function() {
  this.pins = 10;
  this.lastShot = 0;
  this.frame = 0.5;
  this.partialScore = 0
  this.firstShot = undefined;
  this.secondShot = undefined;
  this.bonus = false;
  this.strike = false;
  
 Bowling.prototype.getScore = function() {
   return this.partialScore;
 };
 
 Bowling.prototype._getFrame = function() {
   return this.frame;
 };
  
 Bowling.prototype._setFrame = function(amount) {
   if (this.frame >= 9.5) {
     console.log("set frame at frame: " + this.frame)
     return this.frame += 0.5;
   } else if (this.frame === 11) {
      return this.frame;
   } else {
     return this.frame += amount;
   } 
 };
 
 Bowling.prototype._nextFrame = function() {
   this._setFrame(1);
   this.switchShot();
   this.pins = 10;
   this.strike = true;
   this.bonus = true;
   return this.partialScore += 10;
 };
 
 Bowling.prototype._nextShot = function() {
   this._setFrame(0.5);
 };
  
 Bowling.prototype.switchShot = function() {
   if (this.frame !== parseInt(this.frame, 10)) {
     (this.firstShot = this.lastShot);
     (this.secondShot = undefined);
   } else {
     (this.secondShot = this.lastShot);
   }
 };  
  
 Bowling.prototype.setPins = function() {
    this.pins -= this.lastShot;
    if (this.firstShot === 10) {
        if (this.bonus && this.frame === 10.5) {
          console.log("this happened on frame: " + this.frame);
          return this._nextFrame();
        } else if (this.bonus){
          this.partialScore += 10;
          return this._nextFrame();
        } else {
          return this._nextFrame();
        }
    } else if (this.firstShot && this.secondShot === undefined){
      this._nextShot();
        if (this.bonus) this.partialScore += this.lastShot; this.bonus = false;
      return this.partialScore += this.lastShot; 
    } else {
      this._nextShot();
        if (this.pins === 0) this.bonus = true;
        if (this.strike) this.partialScore += this.lastShot; this.strike = false;
      this.pins = 10;
      return this.partialScore += this.lastShot;
    };
 }
   
 Bowling.prototype.shoot = function() {
   this.lastShot = (Math.round(Math.random() * this.pins));
   if (this.frame === 10.5 && (this.firstShot + this.lastShot !== 10)) {
     this.partialScore += this.lastShot;
     this.lastShot = 'Nice Game';
     return alert("The game is finished! The final score is: " + this.getScore());
   }
   if ((this.frame === 10.5 && this.strike) || (this.frame === 10.5 && (this.firstShot + this.lastShot !== 10))) {
     this.partialScore += this.lastShot;
     this.setPins();
     return this.lastShot;
   }
   if (this.frame === 11 && !this.bonus) {
     this.partialScore += this.lastShot;
     this.lastShot = 'Nice Game';
     return alert("The game is finished! The final score is: " + this.getScore());
   }
   if ((this.frame === 11 && this.strike) || (this.frame === 11 && this.bonus)) {
     this.partialScore += this.lastShot;
     this.lastShot = 'Nice Game';
     return alert("The game is finished! The final score is: " + this.getScore());
   };
   
   this.switchShot(); 
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


