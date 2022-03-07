class Frame {
  constructor () {
    this.rolls = []
    this.spareBoolean = false
    this.strikeBoolean = false
    this.frameCompletedBoolean = false
    this.firstRollScore = 0
    this.secondRollScore = 0
    this.bonusScore = 0
    this.totalScore = 0
    this.firstTenthFrameBonusRollScore = 0
    this.secondTenthFrameBonusRollScore = 0
  }

  inputRoll (numOfPins) {
    this.rolls.push(numOfPins)
  }

  enterFirstRollScore (numOfPins, scorecard) {
    if (numOfPins > 10) {
      throw new Error('A maximum of 10 can be scored per frame.')
    }
    this.addToScorecard(scorecard)
    this.firstRollScore = numOfPins
    if (numOfPins === 10) this.strikeBoolean = true
    this.calculateTotalScore()
    this.updateBonusIfNeeded(scorecard, numOfPins, 1)
  }

  enterSecondRollScore (numOfPins, scorecard) {
    if (this.firstRollScore + numOfPins > 10) {
      throw new Error('A maximum of 10 can be scored per frame.')
    }
    this.secondRollScore = numOfPins
    this.calculateTotalScore()
    this.frameCompletedBoolean = true
    if (this.totalScore === 10) this.spareBoolean = true
    this.updateBonusIfNeeded(scorecard, numOfPins, 2)
  }

  calculateTotalScore () {
    this.totalScore = this.firstRollScore + this.secondRollScore + this.bonusScore
    return this.totalScore
  }

  allRolls () {
    return this.rolls
  }

  addToScorecard (scorecard) {
    scorecard.addFrame(this)
  }

  checkForSpare (scorecard) {
    return scorecard.isPreviousFrameSpare(this)
  }

  checkForPreviousFrameStrike (scorecard) {
    return scorecard.isPreviousFrameStrike(this)
  }

  checkForStrikeTwoFramesPrevious (scorecard) {
    return scorecard.isTwoFramesPreviousStrike(this)
  }

  addSpareBonus (scorecard, numOfPins) {
    const bonusFrame = this.findFrame(scorecard, 1)
    bonusFrame.bonusScore += numOfPins
    bonusFrame.calculateTotalScore()
  }

  addStrikeBonusFromTwoFramesPrev (scorecard, numOfPins) {
    const bonusFrame = this.findFrame(scorecard, 2)
    bonusFrame.bonusScore += (numOfPins + 10)
    bonusFrame.calculateTotalScore()
  }

  addStrikeBonus (scorecard, numOfPins) {
    const bonusFrame = this.findFrame(scorecard, 1)
    bonusFrame.bonusScore += (numOfPins + this.firstRollScore)
    bonusFrame.calculateTotalScore()
  }

  updateBonusIfNeeded (scorecard, numOfPins, rollType) {
    if (rollType === 1) {
      if (this.checkForSpare(scorecard)) this.addSpareBonus(scorecard, numOfPins)
      if (this.checkForPreviousFrameStrike(scorecard) && this.checkForStrikeTwoFramesPrevious(scorecard)) {
        this.addStrikeBonusFromTwoFramesPrev(scorecard, numOfPins)
      }
    } else {
      if (this.checkForPreviousFrameStrike(scorecard)) {
        this.addStrikeBonus(scorecard, numOfPins)
      }
    }
  }

  findFrame (scorecard, framesPrevious) {
    const i = scorecard.frames.indexOf(this)
    return scorecard.frames[i - framesPrevious]
  }

  enterLastFrameBonusRollScore (numOfPins, scorecard) {
    if (scorecard.frames.length < 10) {
      throw new Error('This bonus roll is only available in the 10th frame')
    }
    if (scorecard.frames[9].totalScore < 10) {
      throw new Error('This bonus roll is only available after 10th frame strike or spare is scored')
    }
    this.firstTenthFrameBonusRollScore = numOfPins
    this.bonusScore += numOfPins
    this.calculateTotalScore()
    this.updateBonusIfNeeded(scorecard, numOfPins, 2)
  }

  enterLastFrameSecondBonusRollScore (numOfPins, scorecard) {
    if (scorecard.frames.length < 10) {
      throw new Error('This bonus roll is only available in the 10th frame')
    }
    if (scorecard.frames[9].firstRollScore < 10) {
      throw new Error('This bonus roll is only available after 10th frame strike is scored')
    }
    this.secondTenthFrameBonusRollScore = numOfPins
    this.bonusScore += numOfPins
    this.calculateTotalScore()
  }

  frameImage () {
    if (this.strikeBoolean) {
      return 'X |  '
    } else if (this.spareBoolean) {
      return `${this.rolls[0]} |/ `
    } else if (this.frameCompletedBoolean) {
      return `${this.rolls[0]} |${this.rolls[1]} `
    } else {
      return `${this.rolls[0]} |  `
    }
  }
}

module.exports = Frame
