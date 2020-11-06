class Scorecard {
  constructor() {
    this.frames = []
  }

  getFrame(n) {
    return this.frames[n]
  }

  add(frame) {
    frame.setNumber(this.frames.length + 1)
    this.frames.push(frame)
  }
}