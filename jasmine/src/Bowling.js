function Bowling(){
  this.totalScore = 0;
  this.scoreCard = new ScoreCard();
}


Bowling.prototype.writeFrameOne = function(score){
  this.scoreCard.add(score); 
  if (this.scoreCard.spare === true){
    this.totalScore += this.scoreCard.bonus;
    this.scoreCard.spare = false;
    this.scoreCard.bonus = 0;
    this.scoreCard.currentFrame = [score];
  };

};

Bowling.prototype.writeFrameTwo = function(score){
  this.scoreCard.add(score);
  var frame = this.scoreCard.currentFrame;
  this.totalScore += frame.reduce(function(a, b){return a + b});
};

Bowling.prototype.isFinished = function(){
  return this.scoreCard.isFinished();
};
