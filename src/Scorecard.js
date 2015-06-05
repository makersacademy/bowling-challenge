function Scorecard (){
  this.bonus = 0;
  this.total = + this.bonus;
  this.strike = false;
  this.frames = [];
};


Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  this.calcTots(frame);
};

Scorecard.prototype.calcTots = function(frame) {
  this.total += frame.total;
  this.bonus = 0;
  var rounds = this.frames.length;
  for (var i = 0; i < rounds; i++) {
    if (this.frames[i].strike && i > 2) {
      if (this.frames[i-3].strike && this.frames[i-2].strike) {
        this.bonus = this.frames[i-2].total + this.frames[i-1].go1;
      }
    this.total += this.frames[i].total
    }
  };
};







