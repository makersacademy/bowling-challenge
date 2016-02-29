Bowling.prototype.fakeShoot = function(pins) {
   this.lastShot = pins;
   if (this.frame === 10.5 && (this.firstShot + this.secondShot !== 10)) {
     this.partialScore += this.lastShot;
     this.lastShot = 'Nice Game';
     return alert("The game is finished! The final score is: " + this.getScore());
   }
   if ((this.frame === 10.5 && this.strike) || (this.frame === 10.5 && (this.firstShot + this.secondShot === 10))) {
     this.switchShot();
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
};