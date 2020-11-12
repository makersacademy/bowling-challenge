class Scorecard {
  constructor(score, frames = new Frames) {
    this.score = score
    this.frames = frames
  }

  create() {
    let totalRolls = this.score.length
    let frame = 1
    let roll = 0
    let rolls
    let i
    for(i=1; i<=10; i++) {
      if (roll === totalRolls) {
        break;
      } else if (frame === 10) {
        rolls = this.score.slice(roll, totalRolls)
        this.frames.add(frame, rolls)
      } else if(this.score[roll] === 10) {
        this.frames.add(frame, [10, 0])
        ++roll
        ++frame
      } else {
        rolls = this.score.slice(roll, roll+2)
        this.frames.add(frame, rolls)
        roll += 2
        ++frame
      }
    }
    return this.frames.run()
  }
}
