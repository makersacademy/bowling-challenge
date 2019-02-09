'use strict'
class Bowling {
  constructor () {
    this.frame = 0
    this.roll = 0
    this.frameScore = 0
    this._gameScore = {}
    this.scorecardComplete = false
    this.spare = false
    this.strike = false
  }

  enterScore (number) {
    this.frameScore += number
    this.roll++
    if (this.spare) {
      this.addSpareBonus(number)
      this.spare = false
    }
    this.checkFrameEnd()
  }

  checkFrameEnd () {
    if (this.frameScore === 10) {
      this.spare = true
      this.endFrame()
    } else if (this.roll === 2) {
      this.endFrame()
    }
  }

  endFrame () {
    this.roll = 0
    this._gameScore[this.frame] = this.frameScore
    this.frame++
    this.frameScore = 0
    this.checkGameEnd()
  }

  checkGameEnd () {
    if (this.frame === 10) {
      this.endGame()
    }
  }

  endGame () {
    this.scorecardComplete = true
  }

  gameScore () {
    let total = 0
    Object.keys(this._gameScore).forEach(num => {
      total += this._gameScore[num]
    })
    return total
  }

  addSpareBonus (num) {
    this._gameScore[this.frame - 1] += num
  }
}

module.exports = Bowling
