'use strict';

function Frame() {
  this.firstBowl = null;
  this.secondBowl = null;
};

Frame.prototype.addBowl = function(score) {
  if (this.firstBowl === null) {
    this.firstBowl = score;
  } else if (this.secondBowl === null) {
    this.secondBowl = score;
  };
};
