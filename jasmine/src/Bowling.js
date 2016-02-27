function Bowling(){
  this.totalScore = 0;
  this.scoreCard = new ScoreCard();
}

Bowling.prototype._addFrameToTotalScore = function(){
  var frame = this.scoreCard.currentFrame; 
  this.totalScore += frame.reduce(function(a, b){return a + b});
};

Bowling.prototype._clearStrike = function(score){
  this._addFrameToTotalScore();
  this.scoreCard.strike = false;
  if (this.scoreCard.strikeCarry) { score += score };
  this.scoreCard.strikeBonus += score; 
  this.scoreCard.strikeCarry = true;
  this.scoreCard.currentFrame = [];
};

Bowling.prototype._clearSpare = function(score){
  this.totalScore += this.scoreCard.bonus;
  this.scoreCard.spare = false;
  this.scoreCard.spareBonus = 0;
  this.scoreCard.currentFrame = [score];
};

Bowling.prototype._clearStrikeCarry = function(score){
  this.scoreCard.strikeBonus += score;
  this.totalScore += this.scoreCard.strikeBonus;
  this.scoreCard.strikeBonus = 0; 
  this.scoreCard.strikeCarry = false;
};

Bowling.prototype.writeFrameOne = function(score){
  if (this.scoreCard.strike) { this._clearStrike(score); };
  this.scoreCard.addFrame1(score); 
  if (this.scoreCard.spare) { this._clearSpare(score); };
};

Bowling.prototype.writeFrameTwo = function(score){
  if (this.scoreCard.strikeCarry){ this._clearStrikeCarry(score) };
  if (this.scoreCard.strike){
    throw { name: 'frameError', message: 'Cannot play 2nd frame for strikes' }; 
  };
  this.scoreCard.addFrame2(score);
  this._addFrameToTotalScore();

};

Bowling.prototype.writeFinalFrame = function(score){
  if (this.scoreCard.spare && this.scoreCard.frameNumber === 11) {
    this.scoreCard.currentFrame.push(score);
    this.scoreCard.spare = false;
    this.totalScore += 2 * score;
  }
 else { throw { name: 'frameError', message: 'Unable to play final frame' } }; 
};

Bowling.prototype.isFinished = function(){
  if (this.scoreCard.frameNumber === 11 && this.scoreCard.spare === false && this.scoreCard.strike === false){
    return this.scoreCard.isFinished();
  }
  else if (this.scoreCard.strike && this.scoreCard.frameNumber === 11){
   this._clearStrike(10);
   this.totalScore += this.scoreCard.strikeBonus + 10;
   return true;
  }
  return false; 
};
