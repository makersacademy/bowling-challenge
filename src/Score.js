function Score() {
  this.currentFrame = 1
  this.results = [[]]
  this.totalScore = 0
}

Score.prototype.addRoll = function(roll) {
  if (this.frameFull(this.results[this.results.length - 1])) {
    this.results.push([roll]);
  } else {
    this.results[this.results.length -1].push(roll);
  }
};

Score.prototype.frameFull = function (currentFrame) {
    if (currentFrame.length === 2){
      return true
    } else {
      return false
    }
};
