'use strict'

function Frame(firstRoll, secondRoll) {
  this.firstRoll = firstRoll;
  this.secondRoll = secondRoll;
  this.score = firstRoll + (secondRoll || 0);
}

Frame.prototype.result = function () {
  if (this.firstRoll === 10) {
    return "strike";
  } else if (this.score === 10) {
    return "spare";
  }
};
