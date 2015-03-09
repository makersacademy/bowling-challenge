ScoreBoard = function(){
  this.gameFrames = [];
  this.totalScore = 0;
};

ScoreBoard.prototype.getFrame = function(frame){
  this.gameFrames.push(frame)
  this.isStrike(frame)
};

ScoreBoard.prototype.isStrike = function(frame){
  return frame.isStrike
};

