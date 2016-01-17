 function Game() {
  this.scorecard = [];
  this.bonusList = [];
  this.currentFrame = new Frame();
  this.results = [];
  this.totalScore = 0;
  this.frameCount = -1
}

Game.prototype.bowl = function(num){
  if(this.checkOver() === true){throw('Game over!')}
  this.currentFrame.roll(num);
  if(this.currentFrame.checkComplete()){this.addFrame()}
}

Game.prototype.addFrame = function(){
  this._addScore();
  this._addBonus();
  this.frameCount ++;
  this.frameScore();
  if(this.checkLastFrame !== true)
    {this.currentFrame = new Frame()}
  else {
    this.currentFrame = new FinalFrame()
    }
};

Game.prototype._addBonus = function(){
  this.bonusList.push(this.currentFrame.getBonus());
};

Game.prototype._addScore = function(){
  this.scorecard.push(this.currentFrame.getResults());
};

Game.prototype.checkLastFrame = function(){
  if(this.frameCount === 8){return true}
}

Game.prototype.checkOver = function(){
  if(this.frameCount === 9){return true}
}

Game.prototype.frameScore = function(){
  if(this.bonusList[this.frameCount] === 0)
    {this.results.push(this.scorecard[this.frameCount][0] + this.scorecard[this.frameCount][1])}
  if(this.bonusList[this.frameCount] === 1)
    {this.results.push(10)}
  if(this.bonusList[this.frameCount] === 2)
    {this.results.push(10)}
    this.calcBonus();
    this.calcTotalScore();
}

Game.prototype.calcTotalScore = function(){
  this.totalScore = 0;
  for(var i = 0; i < this.results.length; i++){
    this.totalScore += this.results[i];
  }
    return this.totalScore;
}

Game.prototype.calcBonus = function(){
if(this.frameCount > 0)
//this sorts out the spares
  {if(this.bonusList[this.frameCount - 1] === 1)
    {this.results[this.frameCount - 1] += this.scorecard[this.frameCount][0]}
  }
  //this sorts out a strike followed by a non-strike
  {if(this.bonusList[this.frameCount - 1] === 2 && this.results[this.frameCount] !== 10)
      {this.results[this.frameCount - 1] += (this.scorecard[this.frameCount][0] + this.scorecard[this.frameCount][1])}}
  if(this.bonusList[this.frameCount - 2] === 2 && this.bonusList[this.frameCount - 1] === 2)
    {this.results[this.frameCount - 2] += (this.scorecard[this.frameCount - 1][0] + this.scorecard[this.frameCount][0])}
  }
