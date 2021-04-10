"use strict";

class Game {

  constructor() {
    this.frames = []
    this.scores = {}
    this.cumulScores = {}
    this.owedRolls = {}
    this.frameNumber = 1
    this.isEnded = false
  }

  inputRoll(pins) {
    if (this.isEnded) {
      return "The game has ended."
    }

    this.frameCheck()

    this.frames[this.frames.length - 1].addRoll(pins)
    this.scores[`frame_${this.frames.length}`] += pins

    Object.keys(this.owedRolls).forEach(key => {
      if (this.owedRolls[key] === 0) {
        return
      } else {
        this.scores[key] += pins;
        this.owedRolls[key] -= 1
      }
    })
    this.frameCumulScore()
    this.setFrameNumber()
    this.endedCheck()
  }

  createFrame() {
    this.frames.push(new Frame(this.frames.length + 1))
    this.scores[`frame_${this.frames.length}`] = 0
    this.cumulScores[`frame_${this.frames.length}`] = 0
  }

  frameCheck() {
    if (this.frames.length === 0) {
      this.createFrame()
    } else if ( this.frames[this.frames.length - 1].isCompleted() ) {
      let owed = this.frames[this.frames.length - 1].owedRolls()
      this.owedRolls[`frame_${this.frames.length}`] = owed
      this.createFrame()
    }
  }

  setFrameNumber() {
    if (this.frames.length === 10 ) {
      return
    }
    if ( this.frames[this.frames.length - 1].isCompleted() ) {
      this.frameNumber += 1
    }
  }

  endedCheck() {
    if ("frame_10" in this.scores && this.frames[this.frames.length - 1].isCompleted() ) {
      this.isEnded = true
    }
  }

  totalScore() {
    let totalScore = 0
    Object.values(this.scores).forEach( function(value) {
      totalScore += value
    })
    return totalScore
  }

  frameCumulScore() {
    this.cumulScores[`frame_1`] = this.scores[`frame_1`]
    for (let i = 2; i < 11; i++) {
      this.cumulScores[`frame_${i}`] = this.scores[`frame_${i}`] + this.cumulScores[`frame_${i - 1}`]
    }
  }

  remainingPins() {
    if ( this.frames.length === 0 ) {
      return 10
    } else if (this.frames[this.frames.length - 1].isCompleted()) {
      return 10
    } else if (this.frameNumber < 10) {
      return (10 - this.frames[this.frames.length - 1].rolls[0])
    } else if (this.frameNumber === 10) {
      return this.remainingPins10thFrame()
    }
  }

  remainingPins10thFrame() {
    let frame10 = this.frames[9]
    if (frame10.rolls[0] === 10 || (frame10.rolls[0] === 10 && frame10.rolls[1] === 10)) {
      return 10
    } else if (frame10.rolls[0] + frame10.rolls[1] === 10) {
      return 10
    } else {
      return 10 - frame10.rolls[0]
    }
  }

}
