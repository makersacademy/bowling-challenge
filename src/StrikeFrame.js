function StrikeFrame() {
  this.firstScore = null;
  this.secondScore = null;
}

StrikeFrame.prototype = {
  _isFrameOver: function() {
     return (this.firstScore === 10 ) || (this.firstScore && this.secondScore)
  },
  _isInvalidScore: function(score) {
     return (this.firstScore + score > 10)
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame is already over')}
    else if (this._isInvalidScore(score)) {throw new Error('Maximum Frame Score Reached')}
    else {this.firstScore ? this.secondScore = score : this.firstScore = score}
  },
  calculateScore: function() {
    return (this.firstScore + this.secondScore) * 2
  },
  frameResult: function() {
    if (this.firstScore == 10) {return 'strike'}
    else if (this.firstScore + this.secondScore == 10) {return 'spare'}
    else {return 'frame'}
  }
};
