"use strict"

function Frame() {
  this.scores = {};
}

Frame.prototype.enterScore = function(score) {
  this.scores.first_roll = score;
};
