'use strict'

function Roll(score) {
  this._score = score
}

Roll.prototype.score = function() {
  return this._score
}