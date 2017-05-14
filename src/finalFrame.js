function FinalFrame(first) {
  this.score = [first]
};

FinalFrame.prototype.isEnded = function() {
  var frame = this.score;
  return frame.length === 2 && frame[0] + frame[1] < 10 || frame.length === 3;
};

FinalFrame.prototype.addBowl = function(n) {
  this.score.push(n);
};

FinalFrame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

FinalFrame.prototype.isStrike = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};
