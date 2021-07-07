class Scorecard {
  constructor(score, frame = Frame) {
    this.score = score
    this.frame = frame
    this.frames = []
    this.STRIKE = 10
    this.TENTHFRAME = 10
    this.scores = []
  }

  getFrames() {
    let totalRolls = this.score.length
    let frame
    let roll = 0
    let rolls
    for(frame=1; frame<=10; frame++) {
      if (roll === totalRolls) {
        break;
      } else if (frame === this.TENTHFRAME) {
        rolls = this.score.slice(roll, totalRolls)
      } else if(this.score[roll] === this.STRIKE) {
        rolls = [this.STRIKE]
        ++roll
      } else {
        rolls = this.score.slice(roll, roll+2)
        roll += 2
      }
      this.frames.push(new this.frame(rolls))
    }
    return this.frames
  }

  getScoresPerFrame() {
    let i
    let score
    let totalframes = this.frames.length
    for(i=0;i<10;i++) {
      if (i === totalframes - 1) {
        score = this.frames[i].tenth()
        this.scores.push(score)
        break;
      } else if (this.frames[i].isStrike() && this.frames[i+1].isStrike()) {
        score = this.STRIKE + this.STRIKE + this.frames[i+2].first()
      } else if (this.frames[i].isStrike()) {
        score = this.STRIKE + this.frames[i+1].score()
      } else if (this.frames[i].isSpare()) {
        score = this.frames[i].score() + this.frames[i+1].first()
      } else {
        score = this.frames[i].score()
      }
      this.scores.push(score)
    }
  }

  getTotalScore() {
    debugger;
    this.scores.forEach(score => console.log(score))
    return this.scores.reduce(((accumulator, currentValue) => accumulator + currentValue))
  }

}
