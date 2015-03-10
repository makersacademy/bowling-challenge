ScoreBoard = function(){
  this.gameFrames = [];
  this.frameScores = [];

};

ScoreBoard.prototype.addFrame = function(frame){
  var n = this.gameFrames.length
  this.gameFrames[n] = frame;
  if(this.gameFrames.length === 10) this.scoreProcess();
};



ScoreBoard.prototype.scoreProcess = function(){
  for (var i = this.gameFrames.length - 1; i >= 0; i--) {
    if(this.gameFrames[i].isStrike){
      if(this.gameFrames[i+1].isStrike && this.gameFrames[i+2].isStrike){
        this.frameScores[i] = 30;
      };          
    };  
  };
};



