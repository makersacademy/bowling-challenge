var Bowl = function() {
 this.frameScore = 0;
 this.maximumFrameScore = 10;
 this.pins = 10;
 this.maximumRollScore = 10;
 this.frameNumber = 1;
 this.maximumFrames = 10;
 this.strikes = 0;
};

Bowl.prototype.nextFrame = function() {
  this.frameNumber++;
  if (this.frameNumber > this.maximumFrames)
    this.frameNumber = this.maximumFrames;
};

Bowl.prototype.roll1 = function(number) {
  this.roll1 = number;
  this.pins -= number;
  if (this.roll1 > this.maximumRollScore)
    this.roll1 = this.maximumRollScore;
  if (number === 10) 
    this.strikes += 1;
    this.nextFrame();
  // } else {
  //   this.roll2();
  // }
};

// Bowl.prototype.strike = function() {
//   if (roll1)
// };

Bowl.prototype.frameScore = function() {
  (this.roll1 += this.roll2)
};
