ScoreBoard = function(){
  this.gameFrames = [];
  this.frameScores = [];
  this.currentScore = 0;
};

ScoreBoard.prototype.processScores = function(){
  for (var i = 0; i < this.gameFrames.length; i++) {
    frame = this.gameFrames[i];
    this.accumulator(frame);   
  };
};

ScoreBoard.prototype.accumulator = function(frame){
  i = this.getFrameIndex(frame);
  if(this.canCheck(frame)) this.standardFrameCheck(frame) 
  if(typeof this.gameFrames[i+1]=='undefined') return this.frameTen(frame);  
  if(typeof this.gameFrames[i+2]=='undefined') return this.frameNine(frame);  
};

ScoreBoard.prototype.totalUpGame = function(){
  var total = 0;
  for (var i = 0; i < this.frameScores.length; i++) { 
    total += this.frameScores[i];
  };
  return this.currentScore = total;
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

ScoreBoard.prototype.addFrameScores = function(frame){
  i = this.getFrameIndex(frame)
  this.frameScores[i] = frame.rollOneScore + frame.rollTwoScore;
};

ScoreBoard.prototype.canCheck = function(frame){
  i = this.getFrameIndex(frame)
  if(typeof this.gameFrames[i+1] == 'undefined') return false;
  if(typeof this.gameFrames[i+2] == 'undefined') return false;
  return true;
};

ScoreBoard.prototype.standardFrameCheck = function(frame){
  if(this.isStrike(frame)) return this.standardStrikeFrame(frame);
  if(this.isHalfStrike(frame)) return this.standardHalfStrikeFrame(frame);
  return this.addFrameScores(frame);
};

ScoreBoard.prototype.isTurkey = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(this.gameFrames[i+1]) && this.isStrike(this.gameFrames[i+2])) return true
  return false;  
}

ScoreBoard.prototype.isDoubleStrike = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(this.gameFrames[i+1]) && !this.isStrike(this.gameFrames[i+2])) return true;
  return false;
};

ScoreBoard.prototype.getNextFrameScores = function(frame){
  i = this.getFrameIndex(frame);
  return this.gameFrames[i+1].rollOneScore + this.gameFrames[i+1].rollTwoScore;
};

ScoreBoard.prototype.standardStrikeFrame = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isTurkey(frame)) return this.frameScores[i] = 30;
  if(this.isDoubleStrike(frame)) return this.frameScores[i] = 20 + this.gameFrames[i+2].rollOneScore;
  return this.frameScores[i] = 10 + this.getNextFrameScores(frame);
};

ScoreBoard.prototype.standardHalfStrikeFrame = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(this.gameFrames[i+1])) return this.frameScores[i] = 20;
  return this.frameScores[i] = 10 + this.gameFrames[i+1].rollOneScore  
}

ScoreBoard.prototype.frameTen = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(frame)) return this.frameScores[i] = 10
  return this.addFrameScores(frame);
};

ScoreBoard.prototype.frameNine = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(frame) || this.isHalfStrike(frame)) return this.frameNineStrikes(frame);
  return this.addFrameScores(frame);
};

ScoreBoard.prototype.frameNineStrikes = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(this.gameFrames[i+1])) return this.frameScores[i] = 20;
  return this.frameScores[i] = 10 + this.getNextFrameScores(frame);
};
