function Bowling(){
  this.totalScore = 0;
  this.scoreCard = new ScoreCard();
}


Bowling.prototype.writeFrameOne = function(score){
  if (this.scoreCard.strike === true) {
  var frame = this.scoreCard.currentFrame; 
     this.totalScore += frame.reduce(function(a, b){return a + b});
     console.log("here: " + this.totalScore)
    this.scoreCard.strike = false;
    this.scoreCard.strikeBonus += score; 
    console.log("first strike bonus:" + this.scoreCard.strikeBonus) 
      this.scoreCard.strikeCarry = true;
    this.scoreCard.currentFrame = [];
  };
  this.scoreCard.add(score); 
  console.log("frame after 1st strike " + this.scoreCard.currentFrame)
  if (this.scoreCard.spare === true){
    this.totalScore += this.scoreCard.bonus;
    this.scoreCard.spare = false;
    this.scoreCard.bonus = 0;
    this.scoreCard.currentFrame = [score];
  };

};

Bowling.prototype.writeFrameTwo = function(score){
  if (this.scoreCard.strikeCarry){
    this.scoreCard.strikeBonus += score;
    console.log("2nd strikecarry: " + this.scoreCard.strikeBonus);
    console.log("totalscore before: " + this.totalScore)
      this.totalScore += this.scoreCard.strikeBonus;
    console.log("totalScore after: " + this.totalScore)
      this.scoreCard.strikeBonus = 0; 
    this.scoreCard.strikeCarry = false;
  };

  if (this.scoreCard.strike === true){
    throw { name: 'frameError', message: 'Cannot play 2nd frame for strikes' }; 
  };
  this.scoreCard.add(score);
  var frame = this.scoreCard.currentFrame; 
  console.log("currentframe " + frame)
  this.totalScore += frame.reduce(function(a, b){return a + b});
  console.log("finally here :" + this.totalScore)
};

Bowling.prototype.isFinished = function(){
  return this.scoreCard.isFinished();
};
