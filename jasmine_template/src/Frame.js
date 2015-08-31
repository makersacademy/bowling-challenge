var Frame = function() {
  this.pins = 10;
  this.totalTurns = 2;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.totalFrameScore = 0;
  this.totalGameScore = 0;
  this.strike = 10;
};

Frame.prototype.newGame = function() {
  return this.pins;
};

Frame.prototype.rollOne = function(number) {
  if (this.totalTurns <= 0 ) {
    if (this.strike === true) {
      return 'STRIKE!'}
  } else {
    this.totalTurns --;
    this.rollOneScore = number;
    return this.pins -= number;
  }
};

Frame.prototype.rollTwo = function(number) {
  if (this.totalTurns === 0) {
    return 'No more throws available' }
  else {
    this.totalTurns --;
    this.rollTwoScore = number;
    this.totalFrameScore = this.rollOneScore + this.rollTwoScore;
  };
};

Frame.prototype.totalScore = function() {
  this.totalGameScore += totalFrameScore;
};

Frame.prototype.playerTurns = function() {
  if (this.totalTurns === 0)
    return 'Frame completed'
};
