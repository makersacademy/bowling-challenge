class Bowl{
  constructor() {
    this.frames = []
  }

  getFrames() {
    return this.frames
  }

  addFrame(shot1, shot2) {
    this.frames.push([shot1, shot2])
  }

  addBonusFrame(...args) {
    this.frames.push(args)
  }
}

module.exports = Bowl