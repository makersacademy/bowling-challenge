class Scorecard {
  constructor() {
    this.frames = []
  }

  getFrame(n) {
    return this.frames[n]
  }

  getLastFrame() {
    return this.frames[this.frames.length - 1]
  }

  getNumFrames() {
    return this.frames.length
  }

  roll(n) {
    this._checkGameOver()
    var currentFrame = this.frames[this.frames.length - 1]
    if (this.frames.length == 0 || currentFrame.isComplete()) {
      currentFrame = new Frame
      this.add(currentFrame)
    }
    currentFrame.roll(n)
  }

  add(frame) {
    frame.setNumber(this.frames.length + 1)
    this.frames.push(frame)
  }

  score(upTo = this.frames.length) {
    var total = 0
    for (var i = 0; i < upTo; i++) {
      total += this.frames[i].score(this.frames[i + 1], this.frames[i + 2])
    }
    return total
  }

  _checkGameOver() {
    if (this.frames.length == 10 && this.getLastFrame().isComplete()) {
      throw new Error("The game is over.")
    }
  }
}