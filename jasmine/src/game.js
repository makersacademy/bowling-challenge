class Game {
  constructor() {
    this.bowls = []
    this.doublePointsTurns = 0
    this.triplePointsTurns = 0
    this.frameScore = 0
    this.frameNumber = 1
    this.bowlNumber = 1
    this.totalScore = 0
  }
  
  bowl(numberPins) {
    this.bowls.push(numberPins)
  }
  score() {
    return this.totalScore
  }
  reset() {
    this.doublePointsTurns = 0
    this.triplePointsTurns = 0
    this.frameScore = 0
    this.frameNumber = 1
    this.bowlNumber = 1
    this.totalScore = 0
  }
  play() {
    var i;
    for (i = 0; i < this.bowls.length; i++) {
      var bowl = this.bowls[i]
      if (this.frameNumber == 10) {
        this.frameTen(bowl)
      } else {
        this.regularFrame(bowl)
      }
    }
  }
  
  addTripleScore(bowl) {
    this.totalScore += bowl * 3
  }
  addDoubleScore(bowl) {
    this.totalScore += bowl * 2
  }
  addScore(bowl) {
    this.totalScore += bowl
  }
  reduceDoublePointsTurns() {
    if (this.doublePointsTurns > 0) {
      this.doublePointsTurns -= 1
    }
  }
  strike(bowl) {
    return (bowl === 10)
  }
  spare(bowl) {
    this.frameScore += bowl
    return (this.frameScore === 10)
  }
  endFrame() {
    this.frameScore = 0
    this.bowlNumber = 1
    this.frameNumber += 1
  }
  secondBowl() {
    return (this.bowlNumber == 2)
  }
  endThrow() {
    this.bowlNumber = 2
  }
  nextBowlWorthDouble() {
    this.doublePointsTurns = 1
    this.endFrame()
  }
  turkeyAttempt() {
    return (this.triplePointsTurns == 1)
  }
  noBonuses() {
    this.reduceDoublePointsTurns()
    if (this.secondBowl() == true) {
      this.endFrame()
    } else {
      this.endThrow()
    }
  }
  addStrikeBonuses() {
    if (this.doublePointsTurns > 1) {
      this.triplePointsTurns = 1
    }
    this.doublePointsTurns = 2
    this.endFrame() 
  }
  doublePointThrow(bowl) {
    this.addDoubleScore(bowl)
    if (this.strike(bowl) == true) {
      this.addStrikeBonuses()
    } else if (this.spare(bowl) == true) {
      this.nextBowlWorthDouble()
    } else {
      this.noBonuses()
    }
  }
  triplePointThrow(bowl) {
    this.addTripleScore(bowl)
    if (this.strike(bowl) == true) {
      this.addStrikeBonuses()
    } else if (this.spare(bowl) == true) {
      this.nextBowlWorthDouble()
      this.triplePointsTurns = 0
    } else {
      this.noBonuses()
      this.triplePointsTurns = 0
    }
  }
  noBonusThrow(bowl) {
    this.addScore(bowl)
    if (this.strike(bowl) == true) {
      this.addStrikeBonuses()
    } else if (this.spare(bowl) == true) {
      this.nextBowlWorthDouble()
    } else {
      this.noBonuses()
    }
  }
  regularFrame(bowl) {
    if (this.turkeyAttempt() == true) {
      this.triplePointThrow(bowl)
    } else if (this.doublePointsTurns == 0) {
      this.noBonusThrow(bowl)
    } else {
      this.doublePointThrow(bowl)
    }
  }
  frameTen(bowl) {
    if (this.bowlNumber < 4) {
      if (this.turkeyAttempt() == true) {
        this.addTripleScore(bowl)
        this.triplePointsTurns = 0
      } else if (this.doublePointsTurns > 0) {
        this.addDoubleScore(bowl)
      } else {
        this.addScore(bowl)
      }
      this.reduceDoublePointsTurns()
      this.bowlNumber += 1
    }
  }
}