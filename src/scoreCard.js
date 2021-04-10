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
      this.previousFrameIsStrike(index) ? bonus += frame.count() : bonus
      let frameTotal = frame.count()
      return frameTotal += bonus
    }).reduce(function(acc, score) { return acc += score },0)
  }
  previousFrameIsStrike(index) {
    return (this.frames[index - 2] && this.frames[index - 1].isStrike())
  }
  
}