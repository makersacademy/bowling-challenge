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
  var basicScore  = 0,
      spareScore  = 0,
      strScore    = 0,
      self        = this,
      results     = this.results;

  for (var i = 0; i < this.results.length; i++) {
    spareScore += self.getSparePoints(results[i], i, results);
    strScore += self.getStrPoints(results[i], i, results);
    if (i > 9) { break }
    basicScore += self.getBasicPoints(results[i])
  }
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
        if (this.isSpareBonus(frame)) {
          framePoints = results[frameIndex + 1][0]
        }
      } catch (e) {
        return 0
      }
    return framePoints;
};

Score.prototype.isSpareBonus = function (frame) {
  var framePoints = this.getBasicPoints(frame)
    if (framePoints === 10 && frame.length === 2) {
      return true
    } else {
      return false
    }
};

Score.prototype.isStrBonus = function (frame) {
  var framePoints = this.getBasicPoints(frame)
    if (framePoints === 10 && frame.length === 1) {
      return true
    } else {
      return false
    }
};

Score.prototype.getStrPoints = function (frame, index, results) {
  var points = 0
      try {
        if (this.isStrBonus(frame) && this.isStrBonus(results[index + 1])) {
          points = results[index + 1][0] + results[index + 2][0]
        } else if (this.isStrBonus(frame)) {
          points = this.getBasicPoints(results[index + 1])
        }
      } catch (e) {
        return 0
      }
    return points;
};
