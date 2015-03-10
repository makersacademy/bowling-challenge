ScoreBoard = function(){
  this.gameFrames = [];
  this.frameScores = [];
};

ScoreBoard.prototype.addFrame = function(frame){
  var n = this.gameFrames.length
  this.gameFrames[n] = frame;
};

ScoreBoard.prototype.scoreProcess = function(){
  for (var i = this.gameFrames.length - 1; i >= 0; i--) {
    if(this.gameFrames[i+1] !== undefined || this.gameFrames[i+2] !== undefined){
      if(this.gameFrames[i].isStrike){
        if(this.gameFrames[i+1].isStrike && this.gameFrames[i+2].isStrike){
          this.frameScores[i] = 30;
        }else if(this.gameFrames[i+1].isHalfStrike){
          this.frameScores[i] = 20;
        }else if(this.gameFrames[i+1].isStrike === false && this.gameFrames[i+1].isHalfStrike === false){
          this.frameScores[i] = this.gameFrames[i+1].rollOneScore + this.gameFrames[i+1].rollTwoScore + 10;
        }; 
      }else if(this.gameFrames[i].isHalfStrike){
        if(this.gameFrames[i+1].isStrike){
          this.frameScores[i] = 20;
        }else{
          this.frameScores[i] = this.gameFrames[i].rollOneScore;
        }                     
      }else{
        this.frameScores[i] = this.gameFrames[i].rollOneScore + this.gameFrames[i].rollTwoScore;
      };  
    };  
  };
};



