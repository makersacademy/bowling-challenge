class Frames {
  constructor(score = new Score, roll = Roll) {
    this.score = score
    this.roll = Roll
    this.all = {}
    this.score = {}
  }

  add(frame, rolls) {
    let roll = new this.roll(rolls)
    this.all[frame] = roll
    console.log(this.all)
    return Object.entries(this.all)
  }

  run() {
    let frames = Object.values(this.all)
    let totalframes = frames.length
    let frame = 1
    let i
    for(i=0;i<10;i++) {
      if (i === totalframes - 1) {
        this.score[frame] = frames[i].tenth()
        break;
      } else if (frames[i].strike() === true) {
        this.score[frame] = frames[i].score() + frames[i+1].score()
        ++frame
      } else if (frames[i].spare() === true) {
        this.score[frame] = frames[i].score() + frames[i+1].first()
        ++frame
      } else {
        this.score[frame] = frames[i].score()
        ++frame
      }
    }
    let scores = Object.values(this.score)
    return scores.reduce(((accumulator, currentValue) => accumulator + currentValue))
  }

}
