function Frame() {
    this.STRIKE_SCORE = 10;
    this.firstScore = null;
    this.secondScore = null;
    this.finalFrameScore = null;
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
        return null;
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
      if (this.getSecondScore() !== null) {
          this.setFinalFrameScore(this.getFirstScore() + this.getSecondScore());
          return this.finalFrameScore;
      }
      return this.finalFrameScore;
    }
}

Frame.prototype.setFinalFrameScore = function(score) {
    this.finalised = true;
    this.secondScore = null;
    this.finalFrameScore = score;
}

Frame.prototype.isStrike = function() {
    return this.strike;
}

Frame.prototype.isSpare = function() {
    return this.spare;
}

Frame.prototype.isRegular = function() {
    return !(this.spare || this.strike);
}

Frame.prototype.isFinalised = function() {
    return this.finalised;
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Frame;
}
