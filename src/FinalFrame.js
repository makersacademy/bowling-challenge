function FinalFrame() {
  this.firstScore = null;
  this.secondScore = null;
  this.thirdScore = null;
}

FinalFrame.prototype = {
  _addToCurrentBowl: function(score){
    if (!this.firstScore) {this.firstScore = score}
    else if (!this.secondScore) {this.secondScore = score}
    else {this.thirdScore = score}
  },
  _isFrameOver: function() {
    if (this.firstScore === 10 && (!this.secondScore || !this.thirdScore)) {return false}
    else if ((this.firstScore + this.secondScore === 10) && !this.thirdScore) {return false}
    else {return this.firstScore && this.secondScore}
  },
  _isInvalidScore: function(score) {
    return score > 10
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame is already over')}
    if (this._isInvalidScore(score)) {throw new Error('Maximum Frame Score Reached')}
    else (this._addToCurrentBowl(score))
    },
  calculateScore: function() {
    return this.firstScore + this.secondScore + this.thirdScore
  }
};
