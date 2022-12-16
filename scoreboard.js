class Scoreboard {

  constructor() {
    this.scoreboard = []
    this.frame_count = 0
  }

  addFrame(frame) {
    this.frame_array = frame.accessFrame()
    this.scoreboard.push(frame)
    this.frame_count++
  }

  frameCount() {
    return this.frame_count
  }

  total() {
    let sum = 0
    this.scoreboard.forEach(frame => {
      sum += frame.frameTotal()
    })
    return sum
  }
}

module.exports = Scoreboard;