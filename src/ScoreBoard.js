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

ScoreBoard.prototype.processScores = function(){
  for (var i = 0; i < this.gameFrames.length; i++) {
    frame = this.gameFrames[i];
    this.accumulator(frame);   
  };
};

ScoreBoard.prototype.accumulator = function(frame){
  i = this.getFrameIndex(frame);
  if(this.canCheck(frame)){
    if(this.isStrike(frame)){
      this.standardStrikeFrame(frame);
    };  
  }else{
    if(typeof this.gameFrames[i+1]=='undefined'){
      this.frameTen(frame);
    }else if(typeof this.gameFrames[i+2]=='undefined'){
      this.frameNine(frame);  
    };
  }; 
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
  if(this.isTurkey(frame)){
    this.frameScores[i] = 30;
  }else if(this.isDoubleStrike(frame)){
    this.frameScores[i] = 20 + this.gameFrames[i+2].rollOneScore;
  }else{
    this.frameScores[i] = 10 + this.getNextFrameScores(frame);
  }; 
};

ScoreBoard.prototype.frameTen = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(frame)){
    this.frameScores[i] = 10
  }else{
    this.addFrameScores(frame);
  };
};

ScoreBoard.prototype.frameNine = function(frame){
  i = this.getFrameIndex(frame);
  if(this.isStrike(frame) || this.isHalfStrike(frame)){
    if(this.isStrike(this.gameFrames[i+1])){
      this.frameScores[i] = 20;
    }else{
      this.frameScores[i] = 10 + this.getNextFrameScores(frame);
    };
  }else{
    this.addFrameScores(frame);
  };
};
