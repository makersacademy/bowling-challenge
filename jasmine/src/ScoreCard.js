function ScoreCard(){
  this.show = {};
  this.frameNumber = 1;
  this.currentFrame = [];
  this.spare = false;
  this.spareBonus = 0;
  this.strike = false;
  this.strikeBonus = 0;
  this.strikeCarry = false;
}

ScoreCard.prototype._advanceFrame = function(score){
    this.currentFrame.push(score);
    var key = "Frame " + this.frameNumber;
    this.show[key] = this.currentFrame;
    this.frameNumber++;
};

ScoreCard.prototype._setStrike = function(score){
      this.strike = true; 
      this._advanceFrame(score);
};

ScoreCard.prototype.addFrame1 = function(score){
    if (score === 10){ this._setStrike(score); }
    else if (this.spare === true){ this.bonus = score; }
    else { this.currentFrame = [score]; }
};

ScoreCard.prototype.addFrame2 = function(score){
    this._advanceFrame(score);
    if (this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.spare = true;
    }
};

ScoreCard.prototype.isFinished = function(){
  return ((this.spare === false) && (this.frameNumber === 11));
};
