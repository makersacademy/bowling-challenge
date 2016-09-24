function Score() {
  this._results = [[]]
  this._totalScore = 0
}

Score.prototype.addRoll = function(roll) {
  if (this.isFrameFull(this._results[this._results.length - 1])) {
    this._results.push([roll]);
  } else {
    this._results[this._results.length - 1].push(roll);
  }
  this.currentScore();
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

Score.prototype.currentScore = function () {
  var basicScore  = 0,
      spareScore  = 0,
      strScore    = 0,
      self        = this,
      results     = this._results;

  for (var i = 0; i < results.length; i++) {
    spareScore += self.sparePoints(results[i], i);
    strScore += self.strikePoints(results[i], i);
    if (i > 9) { break }
    basicScore += self.basicPoints(results[i])
  }
  this._totalScore = basicScore + spareScore + strScore
};

Score.prototype.basicPoints = function (frame) {
  var framePoints = 0
  for (var i = 0; i < frame.length; i++) {
    framePoints += frame[i]
  }
  return framePoints
};

Score.prototype.sparePoints = function (frame, index) {
  var framePoints = 0
  var results = this._results
      try {
        if (this.spareBonus(frame)) {
          framePoints = results[index + 1][0]
        }
      } catch (e) {
        return 0
      }
    return framePoints;
};

Score.prototype.spareBonus = function (frame) {
  var framePoints = this.basicPoints(frame)
    if (framePoints === 10 && frame.length === 2) {
      return true
    } else {
      return false
    }
};

Score.prototype.strikePoints = function (frame, index) {
  var points = 0
  var results = this._results
      try {
        if (this.isStrike(frame) && this.isStrike(results[index + 1])) {
          points = results[index + 1][0] + results[index + 2][0]
        } else if (this.isStrike(frame)) {
          points = this.basicPoints(results[index + 1])
        }
      } catch (e) {
        return 0
      }
    return points;
};
