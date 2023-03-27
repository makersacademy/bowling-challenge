class ScoreCard {
  constructor() {
    this.frames = []
  }

  addFrame(frame) {
    const frameHasNoRolls = frame.rolls === undefined
    const frameIsIncomplete = frame.rolls?.[0] !== 10 && frame.rolls?.length === 1 

    if (frameHasNoRolls || frameIsIncomplete) return "This frame is not complete"
    if (this.frames.length === 10) return "This game is over"

    frame.number = this.frames.length + 1 // allocate frame number to new frame
    this.frames.push(frame)
  }
  // unfinished work
}

module.exports = { ScoreCard }