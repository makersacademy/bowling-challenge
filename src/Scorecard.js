function Scorecard (){
  this.total = 0;
  this.frame = [];
};


Scorecard.prototype.addFrame = function(frame) {
  this.frame.push(frame);
  this.calcTots();
};

Scorecard.prototype.calcTots = function() {
  var rounds = this.frame.length;
  var that = this;

  for (var i = 0; i < this.frame.length; i++) {
    this.total += this.frame[i].total
    }
  }
};







