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
  this.calculateCurrentScore();
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

Score.prototype.calculateCurrentScore = function () {
var basicScore = 0
  this.results.forEach(function(frame) {
    basicScore += Score.prototype.getPoints(frame);
  })
  this.totalScore = basicScore
};

Score.prototype.getPoints = function (frame) {
var framePoints = 0
  frame.forEach(function(roll) {
    framePoints += roll;
  });
return framePoints
};
