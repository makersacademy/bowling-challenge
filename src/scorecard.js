function Scorecard () {
  this._score = [0]
  this._allFrames = []
}

// Record Scores
Scorecard.prototype.firstThrow = function (score) {
  this._firstThrow = score
}

Scorecard.prototype.secondThrow = function (score) {
  let pinsRemaining = 10 - this._firstThrow
  if (this._firstThrow + score > 10) {
    // throw new Error(`There are only ${pinsRemaining} pins Pins remaining`);
  } else {
    this._secondThrow = score
  }
}

Scorecard.prototype.resetThrows = function () {
  this._firstThrow = 0
  this._secondThrow = 0
}

Scorecard.prototype.addToFrames = function () {
  this._allFrames.push([this._firstThrow, this._secondThrow])
  this.resetThrows()
}

Scorecard.prototype.recordStrike = function () {
  this._allFrames.push([10, 0])
}

// Logic Checks
Scorecard.prototype.strikeCheck = function (number1, number2) {
  if (number1 === 10) {
    return true
  }
}

Scorecard.prototype.spareCheck = function (number1, number2) {
  if (number1 != 10 && number1 + number2 === 10) {
    return true
  }
}

Scorecard.prototype.updateScores = function () {
  for (var i = 0; i < this._allFrames.length; i++) {
    // console.log(this._score)
    var firstScore = this._allFrames[i][0]
    var secondScore = this._allFrames[i][1]
    console.log(`Turn:${i}`)
    console.log(`Current:${firstScore} + ${secondScore}`)
    if (i === 0) {
      // First frame checks
      if (
        this.strikeCheck(firstScore) ||
        this.spareCheck(firstScore, secondScore)
      ) {
        this._score[i] = 0
        console.log(`This score became: ${this._score[i]}`)
      } else {
        this._score[i] = firstScore + secondScore
        console.log(`This score became: ${this._score[i]}`)
      }
    }
    if (i > 0) {
      // Checks after first frame
      let lastFirstScore = this._allFrames[i - 1][0]
      let lastSecondScore = this._allFrames[i - 1][1]
      console.log(`Last:${lastFirstScore} + ${lastSecondScore}`)
      // If last score has was a stike and current is not a Strike
      if (this.strikeCheck(lastFirstScore) && !this.strikeCheck(firstScore)) {
        this._score[i - 1] = lastFirstScore + firstScore + secondScore // Strike
        console.log(`Last score became: ${this._score[i - 1]}`) // Strike
      }
      // If last score was a spare and current is not a Strike
      else if (this.spareCheck(lastFirstScore, lastSecondScore)) {
        this._score[i - 1] = lastFirstScore + lastSecondScore + firstScore // Spare
        console.log(`Last score became: ${this._score[i - 1]}`)
      }
      // Current score is a Strike or Spare
      if (
        this.strikeCheck(firstScore) ||
        this.spareCheck(firstScore, secondScore)
      ) {
        this._score[i] = 0
        console.log(`This score became: ${this._score[i]}`)
      }
      // Anything else
      else {
        this._score[i] = firstScore + secondScore
        console.log(`This score became: ${this._score[i]}`)
      }
    }
    if (i > 1 && i < 10) {
      // Checks starting at third frame
      let lastLastFirstScore = this._allFrames[i - 2][0]
      let lastFirstScore = this._allFrames[i - 1][0]
      // Triple Strike
      if (
        this.strikeCheck(lastLastFirstScore) &&
        this.strikeCheck(lastFirstScore) &&
        this.strikeCheck(firstScore)
      ) {
        this._score[i - 2] = 30
        console.log(`The score from 2 turns ago became: ${this._score[i - 2]}`)
      }
      // Double Strike following anything else
      if (
        lastLastFirstScore === 10 &&
        lastFirstScore === 10 &&
        firstScore != 10
      ) { this._score[i - 2] = 20 + firstScore }
    }
    if (i === 9) {
      // Checks in last frame
      let lastLastFirstScore = this._allFrames[i - 2][0]
      let lastFirstScore = this._allFrames[i - 1][0]
      // Triple Strike
      if (
        this.strikeCheck(lastLastFirstScore) &&
        this.strikeCheck(lastFirstScore) &&
        this.strikeCheck(firstScore)
      ) {
        this._score[i - 1] = 30
        console.log(`The score from 2 turns ago became: ${this._score[i - 2]}`)
      }
    }
  }
  console.log(this._score)
}

Scorecard.prototype.calculateTotal = function (turn) {
  allScores = this._score
  let total = allScores.reduce((total, amount) => total + amount)
  return total
}
