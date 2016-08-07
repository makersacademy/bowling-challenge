'use strict';

function Bowling() {
  this.scorecard = new Scorecard();
}

Bowling.prototype = {

  play: function() {
    var pinsDown = this._roll(this.scorecard.getPinsLeft());
    this.scorecard.receiveScore(pinsDown);
    return pinsDown;
  },

  _roll: function(max) {
    return Math.floor(Math.random() * (1 + max));
  },

}
