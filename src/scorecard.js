import { sumArray } from './utils.js'
import _ from 'lodash'

export class Scorecard {
  constructor () {
    this.currentFrameScore = {
      frame: 0,
      bonus: 0,
      rolls: []
    }
    this.frameCount = 0
    this.scorecard = []
    this.rolls = []
  }

  startGame = () => {
    //        this.frameCount++
  }

  startFrame = () => {
    if (this.frameCount === 10) {
      // eslint-disable-next-line no-throw-literal
      throw { error: 'You cannot start another Frame until you start a new game' }
    }
    this.frameCount++
    this.currentFrameScore = {
      frame: this.frameCount,
      bonus: 0,
      rolls: []
    }
  }

  setBounsScore = () => {
    const [firstRoll, secondRoll] = this.getRolls()
    const previousFrame = this.scorecard[this.getPreviousArrayLocation()]
    const firstRollTenChecker = this.isfirstRollATen() ? secondRoll : 0
    const secondRollTenChecker = this.areFirstTwoRollsATen() ? firstRoll : 0
    previousFrame.bonus += secondRollTenChecker + firstRollTenChecker
    if ((this.frameCount > 2) && (this.frameCount < 10)) {
      const SecondPreviousFrame = this.scorecard[this.getPreviousArrayLocation() - 1]
      SecondPreviousFrame.bonus += (this.isfirstRollATen() ? firstRoll : 0)
    }
  }

  endFrame = () => {
    this.scorecard.push(this.currentFrameScore)
    if ((this.frameCount > 1)) { this.setBounsScore() }
    this.previousFrameScore = this.currentFrameScore
  }

  rollInput = (item) => {
    this.getRolls().push(item)
    this.rolls.push(item)
  }

  // below the magic number 2 is taking away 1 for the array location and another 1 for the previous frame

  getScorecardTotal = () => this.scorecard.reduce((pv, cv) => {
    const { bonus, rolls } = cv
    const subTotalScore = bonus + sumArray(rolls)
    pv += subTotalScore
    return pv
  }, 0)

  isfirstRollATen = () => {
    return this?.previousFrameScore && this.previousFrameScore?.rolls[0] === 10
  }

  areFirstTwoRollsATen = () => {
    return this?.previousFrameScore && (sumArray(this.previousFrameScore?.rolls) === 10)
  }

  getRolls = () => this.currentFrameScore.rolls

  getScoreFromJustPlayedFrame = () => sumArray(this.getRolls())

  getPreviousArrayLocation = () => this.frameCount - 2
  getScorecard = () => this.scorecard
}
