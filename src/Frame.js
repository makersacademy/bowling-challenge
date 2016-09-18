function Frame() {
  this.firstScore = null;
  this.secondScore = null;
}

Frame.prototype = {
  _isFrameOver: function() {
    return (this.firstScore === 10 ) || (this.firstScore != null && this.secondScore != null)
  },
  _isInvalidScore: function(score) {
     return (this.firstScore + score > 10)
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame is already over')}
    else if (this._isInvalidScore(score)) {throw new Error('Maximum Frame Score Reached')}
    else {this.firstScore != null ? this.secondScore = score : this.firstScore = score}
  },
  calculateScore: function() {
        return this.firstScore + this.secondScore
  },
  frameResult: function() {
    if (this.firstScore == 10) {return 'strike'}
    else if (this.firstScore + this.secondScore == 10) {return 'spare'}
    else {return 'frame'}
  },
  getDisplaySymbols: function(){
    firstSymbol = this.firstScore === 10 ? '\u00A0' : this.firstScore
      if (this.firstScore === 10) {secondSymbol = 'X' }
      else if (this.secondScore === null) {secondSymbol = "\u00A0"}
      else if (this.firstScore + this.secondScore === 10) {secondSymbol = '/'}
      else {secondSymbol = this.secondScore}
    return {first: firstSymbol, second: secondSymbol}
  }
};
