class Game {
  constructor() {
    this.frames = []
  }

  getFrames() {
    return this.frames
  }

  addFrame(roll1, roll2) {
    let frame = new Frame(roll1, roll2)
    this.frames.push(frame)
    return frame
  }
}