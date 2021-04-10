class ScoreCard {
  constructor(frames, frame, score) {
    this.frames = []
    this.frame = null
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
  }
  total() {
    let frames = this.frames

    return this.frames.map((frame, index) => {
      let bonus = 0 
      if(this.previousTwoFramesAreStrikes(index)) { bonus += frame.rolls[0] + 10 }
      console.log(`double strike ${bonus}`, this.frames)
      if(this.previousFrameIsStrike(index)) {
        bonus += frame.count()
        console.log(`strike ${bonus}`, this.frames)

    } else if(this.previousFrameIsSpare(index)) {
       bonus += frame.rolls[0] 
       console.log(`spare ${bonus}`)

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

}