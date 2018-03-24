'use strict';
function Score() {

}

function Frame() {
  this.rollOne = 0;
  this.rollTwo = 0;

};

Frame.prototype.play1 = function(pins) {

  return this.rollOne= pins;
};

Frame.prototype.play2 = function(pins) {

  return this.rollTwo= pins;
};

Frame.prototype.currentScore = function(roll) {

  return roll;
}
