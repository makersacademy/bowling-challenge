'use strict'

function Frame () {
  this.frameResults = []
  this.frameTotal = 0
};

Frame.prototype.isStrike = function (arr) {
  if (arr[0] === 10) {
    return true
  } else {
    return false
  };
}

Frame.prototype.isSpare = function (arr) {
  if (arr[0] + arr[1] === 10 && !this.isStrike(arr)) {
    return true
  } else {
    return false
  };
}

module.exports = Frame
