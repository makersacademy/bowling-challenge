function Scorecard() {
  this.frames = [];
}

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Scorecard.prototype.getRollScore = function(frame, roll) {
  return this.frames[frame].rolls[roll];
};

Scorecard.prototype.total = function() {
  var runningTotal = 0;
  for(var i = 0; i < this.frames.length; i ++) {
    if (this.frames[i].isSpare()){
      runningTotal += this.getRollScore(i + 1, 0)
    } else if (this.frames[i].isStrike()){
      runningTotal += this.getRollScore(i + 1, 0) + this.getRollScore(i + 1, 1)
    } 
    runningTotal += this.frames[i].total();
  }
  return runningTotal;
};