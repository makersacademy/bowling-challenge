function Frame() {
    this.firstScore = null;
    this.secondScore = null;
    this.finalFrameScore = null;
    this.STRIKE_SCORE = 10;
    this.strike = false;
    this.spare = false;
    this.finalised = false;
}

Frame.prototype.setFirstScore = function(score){
  if (score == this.STRIKE_SCORE) {
     this.strike = true;
  }
  this.firstScore = score;
}

Frame.prototype.setSecondScore = function(score){
  if (this.isStrike()) {
    return "No second score as first score was a strike!";
  } else {
    if(score + this.getFirstScore() === this.STRIKE_SCORE) {
      this.spare = true;
    } else {
      this.finalised = true;
    }
    this.secondScore = score;
  }
}

Frame.prototype.getFirstScore = function(score){
    return this.firstScore;
}

Frame.prototype.getSecondScore = function(score){
  if (this.getFirstScore() === this.STRIKE_SCORE) {
    return null;
  } else {
    return this.secondScore;
  }
}

Frame.prototype.getFinalFrameScore = function() {
   if (!this.finalised) {
      return "pending";
   } else {
     this.setFinalFrameScore(this.getFirstScore() +
                             this.getSecondScore());
     return this.finalFrameScore;
   }
}

Frame.prototype.setFinalFrameScore = function(score) {
   this.finalised = true;
   this.finalFrameScore = score;
}

Frame.prototype.isStrike = function() {
   return this.strike;
}

Frame.prototype.isSpare = function() {
   return this.spare;
}

Frame.prototype.isFinalised = function() {
  return this.finalised;
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Frame;
}
