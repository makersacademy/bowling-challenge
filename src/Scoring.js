// spare counter can probably be removed

class Scoring {

  constructor() {
    this.strikeCounter = 0;
    this.spareCounter = 0;
    this.frameCounter = 0;
    this.currentFrame = {};
    this.arrayOfFrames = [];
    this.arrayOfScores = [];
  }

  updateCurrentFrame(dict) {
    this.arrayOfFrames.push(this.currentFrame)
    this.currentFrame = dict
    this._updateSpareCounter()
    this._updateStrikeCounter()
  }

  runningScore() {
    if (this.frameCounter >= 1) {
      this._calculatePreviousFramesScores()
    }
    this.frameCounter++
    this.arrayOfScores.push(this._calculateFrameScore())
  }

  _calculateFrameScore() {
    if (this.strikeCounter === 0 && this.spareCounter === 0) {
      return this._rawScore()
    } else if (this.spareCounter === 1) {
      return 'spare_tbd'
    } else if (this.strikeCounter > 0) {
      return ['strike_tbd', this.strikeCounter]
    }
  }
  
  _calculatePreviousFramesScores() {
    if (this.arrayOfScores[this.frameCounter - 1] === 'spare_tbd') {
      this.arrayOfScores[this.frameCounter - 1] = 10 + this.currentFrame[1]
    } else if (
      this.arrayOfScores[this.frameCounter - 1][0] === 'strike_tbd' &&
      this.strikeCounter === 0
    ) {
      this._updatePreviousScoresFollowingMultipleStrikes()
    }
  }

  _isStrike() {
    return this.currentFrame[1] === 10
  }
  
  _isSpare() {
    return !(this._isStrike()) && this._rawScore() === 10
  }

  _rawScore() {
    return this.currentFrame[1] + this.currentFrame[2]
  }

  _updateStrikeCounter() {
    if (this._isStrike()) {
      this.strikeCounter++
    } else {
      this.strikeCounter = 0
    }
  }

  _updateSpareCounter() {
    if (this._isSpare()) {
      this.spareCounter = 1
    } else {
      this.spareCounter = 0
    }
  }

  _updatePreviousScoresFollowingMultipleStrikes() {
    const totalStrikes = this.arrayOfScores[this.frameCounter - 1][1]

    for (let i = 1; i <= totalStrikes; i++) { 
      let frameToUpdate = this.frameCounter - 1 - totalStrikes + i
      this.arrayOfScores[frameToUpdate] = this._multipleStrikesScoring(totalStrikes, i)
    }

  }

  _multipleStrikesScoring(totalStrikes, count) {
    if (totalStrikes - count === 0) {
      return 10 + this._rawScore()
    } else if (totalStrikes - count === 1) {
      return 20 + this.currentFrame[1]
    } else {
      return 30
    }
  }


}

