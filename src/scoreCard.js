class ScoreCard {
  constructor(frames, frame, score) {
    this.frames = []
    this.frame = null
  }
  play(pins) {
    return (this.finalFrame() ? this.tenthRound(pins) : this.roll(pins))
  }
  roll(pins) {
    if(!this.frame) 
    { this.frame = new Frame; 
      this.frame.roll(pins)
    } else if(this.frame.isStrike() && !this.finalFrame()) {
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
    return this.frames.length > 9
  }
  tenthRound(pins) {

  }

//   def tenth_round_no_bonus
//   @frames.last.rolls.length >= 2 && !@frames.last.is_strike? && !@frames.last.is_spare?
// end 

// def tenth_round_with_bonus
//   @frames.last.rolls.length >= 3
// end 

//   def tenth_round(user_input)
//   tenth_round_no_bonus || tenth_round_with_bonus ? game_over : @frames.last.roll(user_input) && tenth_round_score + @score
// end


}