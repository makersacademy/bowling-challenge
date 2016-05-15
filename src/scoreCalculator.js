function ScoreCalculator() {

}

ScoreCalculator.prototype.calculateTotal = function(frames) {
  var total = 0
  for(var i = 0; i <= frames.length; i++) {
    if(i === frames.length) {
      return total
    } else {
      total += this._assessFrameCompleteness(frames, i)
    }
  }
}

ScoreCalculator.prototype._assessFrameCompleteness = function(frames, i) {
  if(this._hasCompleteFrameScore(frames, i)) {
    return this._calculateFrameScore(frames, i)
  } else {
    return 0
  }
}

ScoreCalculator.prototype._calculateFrameScore = function(frames, i) {
  var frameScore = frames[i].firstAndSecondRollScore()
  if(frames[i].isAStrike()) {
    return frameScore + this._calculateStrikeScore(frames, i)
  } else if (frames[i].isASpare()) {
    return frameScore + this._calculateSpareScore(frames, i)
  } else {
    return frameScore
  }
}

ScoreCalculator.prototype._calculateStrikeScore = function(frames, i) {
  if(frames[i+1].isAStrike()) {
    return frames[i+1].firstRollScore() + frames[i+2].firstRollScore()
  } else {
    return frames[i+1].firstAndSecondRollScore()
  }
}

ScoreCalculator.prototype._calculateSpareScore = function(frames, i) {
  return (frames[i+1].firstRollScore())
}

ScoreCalculator.prototype._hasCompleteFrameScore = function(frames, i) {
  if(frames[i].isAStrike()) {
    return (this._hasCompleteFrameScoreStrike(frames, i))
  } else if(frames[i].isASpare()) {
    return (frames[i+1] !== undefined)
  } else {
    return (frames[i].isComplete())
  }
}

ScoreCalculator.prototype._hasCompleteFrameScoreStrike = function (frames, i) {
    if(frames[i+1] !== undefined && frames[i+1].isAStrike()) {
      return (frames[i+2] !== undefined)
    } else if (frames[i+1] !== undefined) {
      return (frames[i+1].isComplete())
    } else {
      return false
    }
}
