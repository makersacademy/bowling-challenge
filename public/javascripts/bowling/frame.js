function Frame() {
  this._scores = [];
  this._pinCount = 10;
};

Frame.prototype.addScore = function(score) {
  if(score > this._pinCount) {
    throw new Error('Illegal Score');
  }
  this._pinCount -= score;
  this._scores.push(score);
};

Frame.prototype.rollCount = function() {
  return this._scores.length;
};

Frame.prototype.total = function() {
  var total = 0
  for (var i = 1; i <= this.rollCount(); i++) {
    total += this._scores[i-1];
  };
  return total;
};

Frame.prototype.isStrike = function() {
  return (this.rollCount() === 1) && (this.total() === 10);
};

Frame.prototype.isSpare = function() {
  return (this.rollCount() === 2) && (this.total() === 10);
};

Frame.prototype.isComplete = function() {
  return (this.isStrike()) || (this.rollCount() == 2);
};
