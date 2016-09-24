function Score() {
  this.currentFrame = 1
  this.results = [[]]
  this.totalScore = 0
}

Score.prototype.addRoll = function(roll) {
  if (this.isFrameFull(this.results[this.results.length - 1])) {
    this.results.push([roll]);
  } else {
    this.results[this.results.length - 1].push(roll);
  }
};

Score.prototype.isFrameFull = function (currentFrame) {
    if (currentFrame.length === 2 || this.isStrike(currentFrame)){
      return true
    } else {
      return false
    }
};

Score.prototype.isStrike = function (currentFrame) {
  if (currentFrame[currentFrame.length - 1] === 10) {
    return true
  } else {
    return false
  }
};
