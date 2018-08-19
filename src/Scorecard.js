function Scorecard() {
  this.frame = [];
  this.allFrames = [];
  this.score = 0
};

Scorecard.prototype.roll = function(roll) {
  this.frame.push(roll);
  this.score += roll;
  if (this.frame.length === 2){
    console.log(this.frame);
    this.allFrames.push(this.frame);
    this.frame = [];
  };
};
