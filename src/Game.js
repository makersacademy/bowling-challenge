"use strict";

class Game {

  constructor() {
    this.frames = []
    this.scores = {}
    this.cumulScores = {}
    this.owedRolls = {}
  }

  inputRoll(pins) {
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

}
