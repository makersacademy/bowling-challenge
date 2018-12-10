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
        if((score + this.getFirstScore()) === this.STRIKE_SCORE) {
            this.spare = true;
        }
        this.finalised = true;
        this.secondScore = score;
        this.setFinalFrameScore(this.getFirstScore() + this.getSecondScore());
    }
}

Frame.prototype.getFirstScore = function(score){
    return this.firstScore;
}

Frame.prototype.getSecondScore = function(score){
    return this.secondScore;
}

Frame.prototype.getFinalFrameScore = function() {
    if (!this.isFinalised()) {
        return null;
    } else {
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
