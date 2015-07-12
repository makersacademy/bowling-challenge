var BowlingScore = function(){

};


var Frames = function(){
this.roll1 = 0;
this.roll2 = 0;
this.frameScore = 0
};

Frames.prototype.roll = function (pins) {
this.rolls.push(pins);
};

BowlingScore.prototype.nextRoll = function (pins) {
if (this.rolls.length >= 1) { this.rolls.push(pins);}
};

BowlingScore.prototype.framescore = function() {
  this.frames = this.frame.r1 + this.frame.r2;

};
