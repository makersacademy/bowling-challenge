'use strict';

function Frame () {
  this.total = 0
  this.rolls = 0
};

Frame.prototype.addScore = function(score) {
  this.total += score;
};

Frame.prototype.addRoll = function() {
  this.rolls ++;
}
