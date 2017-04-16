var BowlingFrame = function(){
  this.roll1 = 0
  this.roll2 = 0
};

BowlingFrame.prototype.firstRoll = function(score) {
  this.roll1 = score;
};

BowlingFrame.prototype.secondRoll= function(score) {
  this.roll2 = score;
};

BowlingFrame.prototype.remainingPins= function(pins) {
  return (10 - this.roll1);
};

BowlingFrame.prototype.score = function() {
  if(this.roll1 + this.roll2 > 10) return 'incorrect scores';
  if(this.roll1 === 10) return 'strike';
  if(this.roll2 === this.remainingPins()) return 'spare';
  return this.roll1 + this.roll2;
};