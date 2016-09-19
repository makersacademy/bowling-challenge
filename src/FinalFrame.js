'use strict';

function FinalFrame() {
  this.firstScore = null;
  this.secondScore = null;
  this.thirdScore = null;
}

FinalFrame.prototype = {
  _addToCurrentBowl: function(score){
    if (this.firstScore === null) {this.firstScore = score}
    else if (this.secondScore === null) {this.secondScore = score}
    else {this.thirdScore = score}
  },
  _isFirstStrike: function () {
    var strike = this.firstScore === 10
    var unfinished = (this.secondScore === null || this.thirdScore === null)
    return strike && unfinished
  },
  _isFirstSpare: function () {
    var spare = (this.firstScore + this.secondScore) === 10
    var unfinished = this.thirdScore === null
    return spare && unfinished;
  },
  _isFrameOver: function() {
    if (this._isFirstStrike()) {return false}
    else if (this._isFirstSpare()) {return false}
    else {return (this.firstScore !== null && this.secondScore !== null)}
  },
  _isInvalidScore: function(score) {
    return score > 10
  },
  _getFirstSymbol: function() {
    return this.firstScore === 10 ? 'X' : this.firstScore
  },
  _getSecondSymbol: function() {
    var lookup = {10: 'X', null: "\u00A0"}
    var spare = this.firstScore + this.secondScore === 10 ? '/' : null
    return lookup[this.secondScore] || spare || this.secondScore
  },
  _getThirdSymbol: function() {
    if (this.thirdScore === 10) {return 'X' }
    else if (this.thirdScore === null) {return "\u00A0"}
    else {return this.thirdScore}
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame is already over')}
    if (this._isInvalidScore(score)) {throw new Error('Max Score Reached')}
    else {this._addToCurrentBowl(score)}
  },
  calculateScore: function() {
    return this.firstScore + this.secondScore + this.thirdScore
  },
  getDisplaySymbols: function(){
    var firstSymbol = this._getFirstSymbol();
    var secondSymbol = this._getSecondSymbol();
    var thirdSymbol = this._getThirdSymbol();
    return {first: firstSymbol, second: secondSymbol, third: thirdSymbol}
  }

};
