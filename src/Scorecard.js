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
    console.log(pins)
    // add points to current frame
    this._pushToCurrentFrame(pins)
    // if tenth frame
    if (this._isTenthFrame()) {
      console.log("tenth frame")
      if (this._isFirstRoll()) {
        return;
      } else if (this._isSecondRoll() && this._isStrikeOrSpare()) {
        console.log("strike or spare in tenth")
        return;
      } else if (this._isSecondRoll()) {
        // add current frame to frames
        this._pushCurrentFrameToFrames()
        // add sum of current frame to total
        this._addSumCurrentFrameToTotal()
        // if strike previous frame
        if (this._isFollowingStrike()) {
          console.log("last frame strike")
          // add sum of current frame to total
          this._addSumCurrentFrameToTotal()
          // if following two strikes
          if (this._isFollowingTwoStrikes()) {
            console.log("is following two strikes")
            this._addFirstRollToTotal()
          }
        // if spare previous frame
        } else if (this._isLastFrameSpare()) {
          console.log("last frame spare")
          this._addFirstRollToTotal()
        }
        return;
      // if this is third roll
      } else {
        // add current frame to frames
        this._pushCurrentFrameToFrames()
        // add sum of current frame to total
        this._addSumCurrentFrameToTotal()
        // if strike previous frame
        if (this._isFollowingStrike()) {
          console.log("last frame strike")
          // add sum of current frame to total
          this._addFirstRollToTotal()
          this.total += (this.getCurrentFrame()[1])
          // if following two strikes
          if (this._isFollowingTwoStrikes()) {
            console.log("is following two strikes")
            this._addFirstRollToTotal()
          }
        // if spare previous frame
        } else if (this._isLastFrameSpare()) {
          console.log("last frame spare")
          this._addFirstRollToTotal()
        }
        return;
      }
    }
    // if first roll and not strike, then return
    if (this._isFirstRollAndNonStrike(pins)) {
      console.log("first roll non strike")
      return;
    }
    // if first frame
    if (this._isFirstFrame()) {
      console.log("first frame")
      // add current frame to frames
      this._pushCurrentFrameToFrames()
      // add sum of current frame to total
      this._addSumCurrentFrameToTotal()
      // clear current frame
      this.currentFrame = []
    } else { // if not first frame
      console.log("not first frame")

      // add current frame to frames
      this._pushCurrentFrameToFrames()
      // add sum of current frame to total
      this._addSumCurrentFrameToTotal()
      // if strike previous frame
      if (this._isFollowingStrike()) {
        console.log("last frame strike")
        // add sum of current frame to total
        this._addSumCurrentFrameToTotal()
        // return if second frame
        if (this._isNotSecondFrame()) {
          console.log("is second frame")
          // if following two strikes
          if (this._isFollowingTwoStrikes()) {
            console.log("is following two strikes")
            this._addFirstRollToTotal()
          }
        }
      // if spare previous frame
      } else if (this._isLastFrameSpare()) {
        console.log("last frame spare")

        this._addFirstRollToTotal()
      }
      // clear current frame
      this.currentFrame = []
    }
  }

  _pushToCurrentFrame(pins) {
    this.currentFrame.push(pins)
  }

  _pushCurrentFrameToFrames() {
    this.frames.push(this.currentFrame)
  }

  _addSumCurrentFrameToTotal() {
    this.total += this._sum(this.currentFrame)
  }

  _sum(frame) {
    var sum = frame.reduce(function(total, num) {
      return total + num;
    });
    return sum
  }

  _isFirstRollAndNonStrike(pins) {
    return (this._isFirstRoll() && this._isNonStrike())
  }

  _isFirstRoll() {
    return this.getCurrentFrame().length == 1
  }

  _isSecondRoll() {
    return this.getCurrentFrame().length == 2
  }

  _isFollowingStrike() {
    return (this._lastFrame().length == 1)
  }

  _isStrikeOrSpare() {
    return this._sum(this.getCurrentFrame()) >= 10
  }

  _isFollowingTwoStrikes() {
    return (this._secondLastFrame().length == 1)
  }

  _isNonStrike() {
    return (this._framesFirstRoll() < 10)
  }

  _isFirstFrame() {
    return this._numberOfFrames() === 0
  }

  _isNotSecondFrame() {
    return this._numberOfFrames() > 2
  }

  _isTenthFrame() {
    return this._numberOfFrames() >= 9
  }

  _lastFrame() {
    return this.getFrames()[this._numberOfFrames() - 2]
  }

  _secondLastFrame() {
    return this.getFrames()[this._numberOfFrames() - 3]
  }

  _numberOfFrames() {
    return this.getFrames().length
  }

  _isLastFrameSpare() {
    return this._sum(this._lastFrame()) === 10
  }

  _addFirstRollToTotal() {
    this.total += this._framesFirstRoll()
  }

  _framesFirstRoll() {
    return this.getCurrentFrame()[0]
  }
};
