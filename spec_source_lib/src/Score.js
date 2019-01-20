'use strict'

function Frame(score) {
  this.score = score;
}

Frame.prototype.score = () => {
  return this.score;
}	