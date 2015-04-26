var ScoreCard = function(n, frames){
  this.allFrames = frames;
  this.scoreFrames(n);
}; 

ScoreCard.prototype.strikeBonus = function(i) {
    if(this.allFrames[i + 1].strike){
      return (this.allFrames[i + 1].score + this.allFrames[i + 2].rolls[0]);
    }else{
      return this.allFrames[i + 1].score;
    }
};

ScoreCard.prototype.scoreFrames = function(n) {
  var upToN = new Array(n);
  var cumulativeScore = 0;
  for(var i=0;i<upToN.length;i++){
    if (this.allFrames[i].spare){
      cumulativeScore += this.allFrames[i + 1].rolls[0]
    };
    if (this.allFrames[i].strike){
      cumulativeScore += this.strikeBonus(i);
    };
    cumulativeScore += this.allFrames[i].score
  }
  this.score = cumulativeScore
};