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
  var spareScore = 0
  var strScore = 0
  var results = this.results

  for (var i = 0; i < results.length; i++) {
    if (i > 9) { break }
    basicScore += Score.prototype.getBasicPoints(results[i])
  }

  results.forEach(function(frame, frameIndex) {
    spareScore += Score.prototype.getSparePoints(frame, frameIndex, results);
    strScore += Score.prototype.getStrPoints(frame, frameIndex, results);
  })
  this.totalScore = basicScore + spareScore + strScore
};

Score.prototype.getBasicPoints = function (frame) {
  var framePoints = 0
  for (var i = 0; i < frame.length; i++) {
    framePoints += frame[i]
  }
  return framePoints
};

Score.prototype.getSparePoints = function (frame, frameIndex, results) {
  var framePoints = 0
      try {
        if (Score.prototype.isSpareBonus(frame)) {
          framePoints = results[frameIndex + 1][0]
        }
      } catch (e) {
        return 0
      }
    return framePoints;
};

Score.prototype.isSpareBonus = function (frame) {
  var framePoints = Score.prototype.getBasicPoints(frame)
    if (framePoints === 10 && frame.length === 2) {
      return true
    } else {
      return false
    }
};

Score.prototype.isStrBonus = function (frame) {
  var framePoints = Score.prototype.getBasicPoints(frame)
    if (framePoints === 10 && frame.length === 1) {
      return true
    } else {
      return false
    }
};

Score.prototype.getStrPoints = function (frame, frameIndex, results) {
  var framePoints = 0
      try {
        if (Score.prototype.isStrBonus(frame)) {
          if (Score.prototype.isStrBonus(results[frameIndex + 1])) {
            framePoints = results[frameIndex + 1][0] + results[frameIndex + 2][0]
          } else {
            framePoints = results[frameIndex + 1][0] + results[frameIndex + 1][1]
          }
        }
      } catch (e) {
        return 0
      }
    return framePoints;
};
