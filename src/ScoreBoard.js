ScoreBoard = function(){
  this.gameFrames = [];
  this.frameScores = [];
};

ScoreBoard.prototype.addFrame = function(frame){
  var n = this.gameFrames.length
  this.gameFrames[n] = frame;
};

ScoreBoard.prototype.isStrike = function(frame){
  return frame.rollOneScore === 10;
};

ScoreBoard.prototype.isHalfStrike = function(frame){
  return frame.rollOneScore + frame.rollTwoScore === 10
};

ScoreBoard.prototype.getFrameIndex = function(frame){
  return this.gameFrames.indexOf(frame);
};

ScoreBoard.prototype.canCheck = function(frame){
  i = this.getFrameIndex(frame)
  if(typeof this.gameFrames[i+1] == 'undefined') return false;
  if(typeof this.gameFrames[i+2] == 'undefined') return false;
  return true;
};


