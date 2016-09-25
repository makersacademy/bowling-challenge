/* jshint undef: true, unused: true */
/* globals Frame */

Frame = function(rolls) { 'use strict';
  this._rolls = rolls;
}

Frame.prototype = {
  totalScore: function(nextFrame) {
    if (this.isSpare()) {
      return this.totalFrame() + nextFrame._rolls[0];
    } else {
    return this.totalFrame()
  }
  },
  totalFrame: function() {
    return this._rolls.reduce(function(a,b){
      return a + b;
    })
  },
  isSpare: function() {
    return this._rolls[0] + this._rolls[1] === 10;
  },
  isStrike: function() {
    return this._rolls[0] === 10;
  }
}
