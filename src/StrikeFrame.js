'use strict';

function StrikeFrame() {
  this.firstScore = null;
  this.secondScore = null;
}

StrikeFrame.prototype = {
  _isFrameOver: function() {
     return (this.firstScore === 10 ) ||
     (this.firstScore !== null && this.secondScore !== null)
  },
  _isInvalidScore: function(score) {
     return (this.firstScore + score > 10)
  },
  _firstSymbol: function() {
    return this.firstScore === 10 ? '\u00A0' : this.firstScore
  },
  _secondSymbol: function() {
    if (this.firstScore === 10) { return 'X' }
    else if (this.secondScore === null) {return "\u00A0"}
    else if (this.firstScore + this.secondScore === 10) {return '/'}
    else {return this.secondScore}
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame is already over')}
    else if (this._isInvalidScore(score)) {throw new Error('Max Score Reached')}
    else {
      if (this.firstScore !== null) {this.secondScore = score}
      else {this.firstScore = score}
    }
  },
  calculateScore: function() {
    return (this.firstScore + this.secondScore) * 2
  },
  frameResult: function() {
    if (this.firstScore === 10) {return 'strike'}
    else if (this.firstScore + this.secondScore === 10) {return 'spare'}
    else {return 'frame'}
  },
  getDisplaySymbols: function(){
    var firstSymbol = this._firstSymbol();
    var secondSymbol = this._secondSymbol();
    return {first: firstSymbol, second: secondSymbol}
  }
};
