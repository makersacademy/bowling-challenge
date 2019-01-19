'use strict'

function Score(score) {
  this.score = score;
}

Score.prototype.score = () => {
  return this.userInput;
}