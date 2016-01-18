 function Game() {
  this.scoreCard = [];
  this.bonusList = [];
  this.frameResults = [];
  this.currentFrame = new Frame();
  this.totalScore = 0;
  this.frameCount = -1
}

Game.prototype.bowl = function(num){
  if(this.checkOver())
    {return "Final score: " + this.totalScore}
  else
    {this.currentFrame.roll(num);
  if(this.currentFrame.isComplete()){this.addFrame()}}
}

Game.prototype.addFrame = function(){
  this._addScore();
  this._addBonus();
  this.frameCount ++;
  this.frameScore();
  if(this.checkLastFrame() === true)
    {this.currentFrame = new FinalFrame()}
  else
    {this.currentFrame = new Frame()}
};

Game.prototype._addScore = function(){
  this.scoreCard.push(this.currentFrame.getResults());
};

Game.prototype._addBonus = function(){
  this.bonusList.push(this.currentFrame.getBonus());
};

Game.prototype.checkLastFrame = function(){
  if(this.frameCount === 8){return true}
}

Game.prototype.checkOver = function(){
  return this.frameCount === 9
}

Game.prototype.frameScore = function(){
  if(this.bonusList[this.frameCount] === 0)
    {this.frameResults.push
    (this.scoreCard[this.frameCount][0] +
    this.scoreCard[this.frameCount][1])}
  else if(this.frameCount === 9 && this.bonusList[9] > 0)
    {this.frameResults.push
    (this.scoreCard[this.frameCount][0] +
    this.scoreCard[this.frameCount][1] +
    this.scoreCard[this.frameCount][2])}
  else
    {this.frameResults.push(10)}
  this.calcBonus();
  this.calcTotalScore();
}

Game.prototype.calcTotalScore = function(){
  this.totalScore = 0;
  for(var i = 0; i < this.frameResults.length; i++){
    this.totalScore += this.frameResults[i];
  }
    return this.totalScore;
}

Game.prototype.calcBonus = function(){
if(this.frameCount > 0)
    {this._calcSpareBonus()}
    {this._calcStrikeBonus()}
    {this._calcDoubleStrikeBonus()}
  }

  Game.prototype._calcSpareBonus = function(){
    if(this.bonusList[this.frameCount - 1] === 1)
      {this.frameResults[this.frameCount - 1] +=
      this.scoreCard[this.frameCount][0]}
  }

  Game.prototype._calcStrikeBonus = function(){
    if(this.bonusList[this.frameCount - 1] === 2 &&
      this.bonusList[this.frameCount] !== 2)
      {this.frameResults[this.frameCount - 1] +=
      (this.scoreCard[this.frameCount][0] +
      this.scoreCard[this.frameCount][1])}
  }

  Game.prototype._calcDoubleStrikeBonus = function(){
    if(this.bonusList[this.frameCount - 2] === 2 &&
      this.bonusList[this.frameCount - 1] === 2)
      {this.frameResults[this.frameCount - 2] +=
      (this.scoreCard[this.frameCount - 1][0] +
      this.scoreCard[this.frameCount][0])}
  }
