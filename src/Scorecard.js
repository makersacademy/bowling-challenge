function Scorecard (){
  this.bonus = 0;
  this.partial = 0;
  this.total = 0;
  this.frames = [];
};


Scorecard.prototype.addFrame = function(frame) {
  this.partial += frame.total;
  this.frames.push(frame);
  this.calcTots(frame);
};

Scorecard.prototype.calcTots = function(frame) {
  this.bonus = 0;
  var rounds = this.frames.length;
  for (var i = 0; i < rounds; i++) {
    if (this.frames[i].strike) {
      if (this.frames[i+1] != undefined) {

        this.bonus = this.frames[i+1].go1;
      }
      console.log(this.bonus);
    // this.total += this.frames[i].total
    }
  };
  console.log(this.partial, this.bonus);
  this.total = this.partial + this.bonus;
};







