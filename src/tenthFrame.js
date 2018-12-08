function TenthFrame() {
    this.STRIKE_SCORE = 10;
    this.firstScore = null;
    this.secondScore = null;
    this.bonusScore = null;
    this.finalFrameScore = null;
    this.strike = false;
    this.spare = false;
    this.finalised = false;
}

TenthFrame.prototype.setFirstScore = function(score){
    this.firstScore = score
    if(score === this.STRIKE_SCORE) {
        this.strike = true;
    }
}

TenthFrame.prototype.setSecondScore = function(score){
    this.secondScore = score
    if((score + this.getFirstScore()) === this.STRIKE_SCORE) {
        this.spare = true;
    }
}

TenthFrame.prototype.setBonusScore = function(score){
  if (this.strike || this.spare) {
     this.bonusScore = score
  } else {
    return null;
  }
}

TenthFrame.prototype.getFirstScore = function(score){
    return this.firstScore;
}

TenthFrame.prototype.getSecondScore = function(score){
    return this.secondScore;
}

TenthFrame.prototype.getBonusScore = function(score){
    return this.bonusScore;
}

TenthFrame.prototype.getFinalFrameScore = function(score){
    this.finalFrameScore =  (this.firstScore + this.secondScore + this.bonusScore);
    return this.finalFrameScore;
}

TenthFrame.prototype.isStrike = function() {
    return this.strike;
}

TenthFrame.prototype.isSpare = function() {
    return this.spare;
}



if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = TenthFrame;
}
