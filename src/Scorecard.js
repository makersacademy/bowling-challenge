'use strict';

class Scorecard {
  constructor() {
    this.frames = [];
    this.currentFrame = [];
    this.total = 0;
  }

  getFrames() {
    return this.frames;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getTotal() {
    return this.total;
  }

  roll(pins) {
    this._pushPinsToCurrentFrame(pins)
    // returns don't work when put in separate function
    if (this._isTenthFrame()) {
      if (this._isFirstRollOrSecondRollStrikeSpare()) {
        return;
      } else if (this._isSecondRoll()) {
        this._addFramesAndBonusTotal()
        return;
      } else {
        this._addFramesAndBonusTotal()
        this._addThirdRollToTotal()
        return;
      }
    }
    if (this._isFirstRollAndNonStrike()) {
      return;
    }
    this._firstFrameLogic()
  }

  _firstFrameLogic() {
    if (this._isFirstFrame()) {
      this._pushToFramesAndAddToTotal()
      this._clearCurrentFrame()
    } else {
      this._addFramesAndBonusTotal()
      this._clearCurrentFrame()
    }
  }

  _clearCurrentFrame() {
    this.currentFrame = []
  }

  _pushPinsToCurrentFrame(pins) {
    this.currentFrame.push(pins)
  }

  _pushCurrentFrameToFrames() {
    this.frames.push(this.currentFrame)
  }

  _sum(frame) {
    if (frame.length === 1) {
      return frame[0]
    } else {
      return frame[0] + frame[1]
    }
  }

  _addSumCurrentFrameToTotal() {
    this.total += this._sum(this.currentFrame)
  }

  _addThirdRollToTotal() {
    this.total += this.currentFrame[2]
  }

  _numberOfFrames() {
    return this.getFrames().length
  }

  _isNonStrike() {
    return (this._getFramesFirstRoll() < 10)
  }

  _isStrikeOrSpare() {
    return this._sum(this.getCurrentFrame()) >= 10
  }

  _isFirstRollAndNonStrike() {
    return (this._isFirstRoll() && this._isNonStrike())
  }

  _isFirstRollOrSecondRollStrikeSpare () {
    return this._isFirstRoll() || this._isSecondRollAndStrikeOrSpare()
  }

  _getPreviousFrame() {
    return this.getFrames()[this._numberOfFrames() - 2]
  }
  // not previous but the one before that
  _getPreviousPreviousFrame() {
    return this.getFrames()[this._numberOfFrames() - 3]
  }

  _isPreviousFrameSpare() {
    return this._sum(this._getPreviousFrame()) === 10
  }

  _isPreviousFrameStrike() {
    return (this._getPreviousFrame().length == 1)
  }

  _isPreviousTwoFramesStrikes() {
    return (this._getPreviousPreviousFrame().length == 1)
  }

  _isFirstFrame() {
    return this._numberOfFrames() === 0
  }

  _isThirdToNinthFrame() {
    return this._numberOfFrames() > 2
  }

  _isTenthFrame() {
    return this._numberOfFrames() >= 9
  }

  _isFirstRoll() {
    return this.getCurrentFrame().length == 1
  }

  _isSecondRoll() {
    return this.getCurrentFrame().length == 2
  }

  _isSecondRollAndStrikeOrSpare() {
    return this._isSecondRoll() && this._isStrikeOrSpare()
  }

  _getFramesFirstRoll() {
    return this.getCurrentFrame()[0]
  }

  _getFramesSecondRoll() {
    return this.getCurrentFrame()[1]
  }

  _addFirstRollToTotal() {
    this.total += this._getFramesFirstRoll()
  }

  _addSecondRollToTotal() {
    this.total += this._getFramesSecondRoll()
  }

  _addFirstTwoRollsToTotal() {
    this._addFirstRollToTotal()
    this._addSecondRollToTotal()
  }

  _pushToFramesAndAddToTotal() {
    this._pushCurrentFrameToFrames()
    this._addSumCurrentFrameToTotal()
  }

  _previousBonusPoints() {
    if (this._isPreviousFrameStrike()) {
      this._addSumCurrentFrameToTotal()
      if (this._isThirdToNinthFrame()) {
        this._doubleStrikeBonusPoints()
      }
    } else if (this._isPreviousFrameSpare()) {
      this._addFirstRollToTotal()
    }
  }

  _doubleStrikeBonusPoints() {
    if (this._isPreviousTwoFramesStrikes()) {
      this._addFirstRollToTotal()
    }
  }

  _addFramesAndBonusTotal() {
    this._pushToFramesAndAddToTotal()
    this._previousBonusPoints()
  }

};
