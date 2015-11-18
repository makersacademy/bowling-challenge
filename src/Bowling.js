function Bowling() {
  this.total = 0;
  this.totalFrames = 10;
  this.frame = [];
  this.strike = 10;
  this.spare =10;
};

Bowling.prototype.rolls = function(roll_1, roll_2, frame){
    this.frame[frame]=[roll_1,roll_2];
    return this.frame;
};

Bowling.prototype.totalFrame = function(frame){
  return this.frame[frame].reduce(function(a, b) {
    return a + b;
  });
};

Bowling.prototype.addScores = function(frame) {
  for (var i=0; i<frame; i++) {
     this.total += this.totalFrame(i+1);
   }
   return this.total;
 }

Bowling.prototype.strikeBonus = function() {
    return this.totalFrame(0) + this.totalFrame(1);
}

Bowling.prototype.spareBonus = function() {
    return this.totalFrame(0) + this.frame[1][0];
}
