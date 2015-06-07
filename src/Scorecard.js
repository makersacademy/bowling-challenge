function Scorecard() {
  this.frames = [];
 }

Scorecard.prototype.recordFrame = function(frame) {
  this.frames.push(frame)
};

Scorecard.prototype.total = function() {
  var runningTotal = 0
  for(var i = 0; i < this.frames.length; i = (i + 1)) {
    runningTotal += this.frames[i].total();
  }
  return runningTotal;
};