var Frame = function() {
  this.totalPins = 10;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.strike = false;
  this.totalRollsPerFrame = 2;
  this.totalFrameScore = 0;
  this.totalGameScore = 0;
  this.frameNumber = 1;
  this.totalFrames = 10;
};

Frame.prototype.newGame = function() {
  return this.totalPins;
};

Frame.prototype.rollOne = function(number) {
  if (this.totalTurnsPerFrame <= 0 ) {
    if (this.strike === true) {
      return 'STRIKE!'}
  } else {
    this.totalRollsPerFrame --;
    this.rollOneScore = number;
    return this.totalPins -= number;
  }
};

Frame.prototype.rollTwo = function(number) {
  if (this.totalTurnsPerFrame === 0) {
    return 'No more throws available' }
  else {
    this.totalRollsPerFrame --;
    this.rollTwoScore = number;
    this.totalFrameScore = this.rollOneScore + this.rollTwoScore;
    this.totalFrames;
    return this.totalPins -= number
  };
};

Frame.prototype.playerTurns = function() {
  if (this.totalTurnsPerFrame === 0)
    return 'Frame completed'
};

Frame.prototype.frameCount = function(number) {
  this.totalFrames -= number;
    return this.totalFrames;
};

Frame.prototype.fullStrike = function() {
  this.strike = true;
  this.totalPins = 0;
  this.rollOne = 10;
  this.rollOneScore = 10;
  this.totalFrameScore = 10;
    return "STRIKE!";
};

Frame.prototype.startNewFrame = function() {
  this.totalPins = 10;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.totalRollsPerFrame = 2;
  this.totalFrameScore = 0;
  this.frameNumber ++;
    return 'New Frame'
};
