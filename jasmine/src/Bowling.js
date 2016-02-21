function Bowling(){
  this.totalScore = 0;
  this.scoreCard = new ScoreCard();
}


Bowling.prototype.writeFrameOne = function(score){
  this.scoreCard.add(score); 
};

Bowling.prototype.writeFrameTwo = function(score){
  this.scoreCard.add(score);
  var frame = this.scoreCard.currentFrame;
  console.log("Bowling can see scorecard" + frame);
  this.totalScore += frame.reduce(function(a, b){return a + b});
};

Bowling.prototype.isFinished = function(){
  return this.scoreCard.isFinished();
};
