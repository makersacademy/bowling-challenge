function Frame() {
  this.number = 1;
  this.OneScore = 0;
  this.TwoScore = 0;
  this.TotalScore = 0;
  this.Strike = false;
  this.Spare = false;
}

// Frame.prototype.frameNumber = function() {
//   return this.number;
// };

Frame.prototype.firstRoll = function(score) {
  this.OneScore = score;
  if (this.OneScore > 10) {
    throw new Error('Please enter a number equal to, or less than, 10');
  } else if (this.OneScore == 10) {
    this.Strike = true;
  } else {
    return this.OneScore;
  }
};

Frame.prototype.secondRoll = function(score) {
  this.TwoScore = score;
  this.TotalScore = this.OneScore + this.TwoScore;
  if (this.TotalScore === 10 && this.Strike === false) {
    this.Spare = true;
  }
};
