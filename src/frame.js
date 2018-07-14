"use strict"

function Frame() {
  this.scores = {first_roll: null, second_roll: null};
}

Frame.prototype.enterScore = function(score) {
  if(this.scores.first_roll === null) {
    this.scores.first_roll = score;
  } else {
    this.scores.second_roll = score;
  }
};
