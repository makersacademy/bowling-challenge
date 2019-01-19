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

  totalScore() {
    let total = 0
    let arr = this.getFrames()
    arr.forEach(function(frame) {
      total += frame.addScore()
    })
    return total
  }
}