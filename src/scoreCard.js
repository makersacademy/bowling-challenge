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
    function previousFrameIsStrike(index, frames) {
      return (frames[index - 2] && frames[index - 1].isStrike())
    }

    let frames = this.frames

    return this.frames.map(function(frame, index) {
      let bonus = 0
      previousFrameIsStrike(index, frames) ? bonus += frame.count() : bonus
      let frameTotal = frame.count()
      return frameTotal += bonus
    }).reduce(function(acc, score) { return acc += score },0)
  }
  
}