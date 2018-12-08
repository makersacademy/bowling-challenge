var Score = function () {
  this.result = 0
  this.frames = []
}

Score.prototype.createsFrames = function () {
  for (var x = 0; x < 10; x++) {
    this.frames[x] = { frame: x + 1 }
  }
}

Score.prototype.scoresIntoFrames = function (frame, bowl, score) {
  this.frames.map(f => {
    if (f.frame === frame && bowl === 1) {
      f.bowl1 = score
    } else if (f.frame === frame && bowl === 2) {
      f.bowl2 = score
    } else if (f.frame === frame && bowl === 3) {
      f.bowl3 = score
    }
  })
}

Score.prototype.searchFrames = function (frame, bowl) {
  for (var number = 0; number < this.frames.length; number++) {
    if (this.frames[number]['frame'] === frame) {
      if (bowl === 1) {
        return this.frames[number]['bowl1']
      } else if (bowl === 2) {
        return this.frames[number]['bowl2']
      } else if (bowl === 3) {
        return this.frames[number]['bowl3']
      }
    }
  }
  return null
}

Score.prototype.gameScoring = function () {
  for (var number = 1; number < this.frames.length + 1; number++) {
    if (isNaN(this.searchFrames(number, 1))) {
    } else if (this._frameTen(number)) {
      this._frameTenScoring(number)
    } else if (this._strikeOrSpare(number)) {
      this._isStrike(number) ? this._strikeScoring(number) : this._spareScoring(number)
    } else { this.result += this._wholeFrame(number) }
  }
}

Score.prototype._frameTenScoring = function (frame) {
  if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) === 20) {
    this.result += (20 + this.searchFrames(frame, 2) + this.searchFrames(frame, 3))
  } else if (this.searchFrames(frame, 1) === 10) {
    this.result += (10 + this.searchFrames(frame, 2) + this.searchFrames(frame, 3))
  } else if (isNaN(this.searchFrames(frame, 3)) === false) {
    this.result += (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) + this.searchFrames(frame, 3))
  } else { this.result += (this._wholeFrame(frame)) }
}

Score.prototype._strikeScoring = function (frame) {
  if (this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 2, 1) === 20) {
    this.result += 30
  } else if (this.searchFrames(frame + 1, 1) === 10 && this.searchFrames(frame + 2, 1) < 10) {
    this.result += (20 + this.searchFrames(frame + 2, 1))
  } else if (this.searchFrames(frame + 1, 1) < 10 && this.searchFrames(frame + 1, 2) < 10) {
    this.result += (this._wholeFrame(frame + 1) + 10)
  }
}

Score.prototype._spareScoring = function (frame) {
  this.result += 10 + this.searchFrames(frame + 1, 1)
}

Score.prototype._strikeOrSpare = function (frame) {
  if (this.searchFrames(frame, 1) === 10 || this._wholeFrame(frame) === 10) return true
}

Score.prototype._wholeFrame = function (frame) {
  return this.searchFrames(frame, 1) + this.searchFrames(frame, 2)
}

Score.prototype._frameTen = function (frame) {
  if (frame === 10) return true
}

Score.prototype._isStrike = function (frame) {
  if (this.searchFrames(frame, 1) === 10) return true
}
