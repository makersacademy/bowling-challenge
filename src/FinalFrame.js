function FinalFrame() {
  this.firstScore = null;
  this.secondScore = null;
  this.thirdScore = null;
}

FinalFrame.prototype = {
  _addToCurrentBowl: function(score){
    if (this.firstScore == null) {this.firstScore = score}
    else if (this.secondScore == null) {this.secondScore = score}
    else {this.thirdScore = score}
  },
  _isFrameOver: function() {
    if (this.firstScore === 10 && (!this.secondScore || this.thirdScore == null)) {return false}
    else if ((this.firstScore + this.secondScore === 10) && this.thirdScore == null) {return false}
    else {return (this.firstScore != null && this.secondScore != null)}
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
  },
  getDisplaySymbols: function(){
    firstSymbol = this.firstScore === 10 ? 'X' : this.firstScore

      if (this.secondScore === 10) {secondSymbol = 'X' }
      else if (this.secondScore === null) {secondSymbol = "\u00A0"}
      else if (this.secondScore === 0) {secondSymbol = "0"}
      else if (this.firstScore + this.secondScore === 10) {secondSymbol = '/'}
      else {secondSymbol = this.secondScore}

      if (this.thirdScore === 10) {thirdSymbol = 'X' }
      else if (this.thirdScore === null) {thirdSymbol = "\u00A0"}
      else {thirdSymbol = this.thirdScore}
    return {first: firstSymbol, second: secondSymbol, third: thirdSymbol}
  }
};
