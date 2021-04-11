class ScoreCard {
  constructor(frames, frame, score) {
    this.frames = []
    this.frame = null
    this.lastFrame = null
  }
  play(pins) {
    return (this.finalFrame() ? this.tenthRound(pins) : this.roll(pins))
  }
  roll(pins) {
    if(!this.frame) 
    { this.frame = new Frame; 
      this.frame.roll(pins)
    } else if(this.frame.isStrike()) {
      this.frames.push(this.frame)
      this.frame = new Frame; 
      this.frame.roll(pins)
    } else {
      this.frame.roll(pins)
      this.frames.push(this.frame)
      this.frame = null
    }
    return this.total()
  }
  total() {
    return this.frames.map((frame, index) => {
        let bonus = 0 
        if(this.previousTwoFramesAreStrikes(index)) { bonus += frame.rolls[0] + 10 }
        if(this.previousFrameIsStrike(index)) {
          bonus += frame.count()
      } else if(this.previousFrameIsSpare(index)) {
        bonus += frame.rolls[0] 
      }
        let frameTotal = frame.count()
        return frameTotal += bonus
    }).reduce(function(acc, score) { return acc += score },0)
  }

  previousFrameIsStrike(index) {
    return (this.frames[index - 2] && this.frames[index - 1].isStrike())
  }
  previousFrameIsSpare(index) {
    return (this.frames[index - 1] && this.frames[index - 1].isSpare())
  }
  previousTwoFramesAreStrikes(index) {
    return (this.frames[index - 2] && this.frames[index - 2].isStrike() && this.previousFrameIsStrike(index))
  }
  finalFrame() {
    return this.frames.length === 9
  }
  tenthRound(pins) {
    if(!this.lastFrame) { 
      this.lastFrame = new Frame; 
      this.lastFrame.roll(pins)
    } else if (this.tenthRoundNoBonus()) {
      let finalScore = this.total() + this.tenthRoundNoBonusScore()
      this.frames.push(this.lastFrame)  
      return `Game ended! Your score was ${finalScore}`
    } else if (this.tenthRoundWithBonus()) {
      this.lastFrame.roll(pins)
      console.log(this.frames)
      console.log(this.total())
      console.log(this.tenthRoundWithBonusScore())
      let finalScore = this.total() === 300 ? 300 : this.total() + this.tenthRoundWithBonusScore()
      this.frames.push(this.lastFrame)
      return `Game ended! Your score was ${finalScore}`
    } else {
      this.lastFrame.roll(pins)
    }
  }
  tenthRoundNoBonus() {
    return (this.lastFrame.rolls.length >= 2 && !this.lastFrame.isSpare() && !this.lastFrame.isStrike())
  }
  tenthRoundWithBonus() {
    return (this.lastFrame.rolls.length === 2 && this.lastFrame.isStrike() || this.lastFrame.isSpare())
  }
  tenthRoundWithBonusScore() {
    return (this.lastFrame.rolls[0] + this.lastFrame.rolls[1] + this.lastFrame.rolls[2])
  }
  tenthRoundNoBonusScore() {
    return (this.lastFrame.rolls[0] + this.lastFrame.rolls[1])
  }
}