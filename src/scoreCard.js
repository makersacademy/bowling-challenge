function Scorecard(FrameContainer){
  this.frames = [];
  for(var i = 0; i < 12; i++){
    this.frames.push(new FrameContainer());
  }
  this.currentFrame = 0;
  this.gameOver = false;
}

Scorecard.prototype.pushScore = function(score , frames){
  frames[0].pushNormal(score);
  frames[1].pushExtra(score);
  frames[2].pushExtra(score);
}

Scorecard.prototype.calculateTotalScore = function(){
  var totalScore = 0;
  for(var j = 0; j < 10; j++){
    totalScore += this.frames[j].calculateScore();
  }
  return totalScore;
}
