const { count } = require("console");

class BowlingScore {
  constructor() {
    this.framesArray = []
    this.score = 0
    this.bonusPoints = 0
    this.frameCount = 0
  }
  
  addFrame(bowl1, bowl2, bowl3) {
    if (bowl3) {
      this.framesArray.push(bowl1, bowl2, bowl3);
      this.frameCount += 10;
    } else {
      if (bowl1 === 'X') {
        this.framesArray.push(bowl1)
      } else {
        this.framesArray.push(bowl1, bowl2)
        this.frameCount += 1
      }
    }
  }
  
  calculateScore() {
    if (this._allStrikes()) {
      this._perfectGame()
      if (this._perfectGame && this.frameCount === 10) {
        this.bonusPoints -= 60
      }
      this.score = this.framesArray.reduce((a, b) => a + b, 0)
      return this.score + this.bonusPoints
    } else {
      if (this._lastElement) {
        console.log('hi2')
        this._replaceLastElement()
      }
      
      
      if (this.framesArray.includes('X') || this.framesArray.includes('/')) {
        console.log('hi3')
        this._scoringStrikesAndSpares()
      }
      
      
      this.score = this.framesArray.reduce((a, b) => a + b, 0)
      console.log(this.bonusPoints)
      return this.score + this.bonusPoints
    }
  }
  
  
  _lastElement() {
    this.framesArray[this.framesArray.length - 1] === 'X' || this.framesArray[this.framesArray.length - 1] === '/'
  }
  
  
  _replaceLastElement() {
    if (this.framesArray[this.framesArray.length - 1] === '/') {
      this.framesArray.splice(-2, 1, 0);
      this.framesArray.splice(-1, 1, 0);
    } else if (this.framesArray[this.framesArray.length - 1] === 'X') {
      this.framesArray.splice(-1, 1, 0);
    }
  }
  
  
  _scoringStrikesAndSpares() {
    this.framesArray.forEach((val, i) => { 
      if (val === 'X') {
        this._strikeCalculation(i)
      } else if (val === '/') {
        this._spareCalculation(i)
      }
    })
  }
  
  
  _allStrikes() {
    if (this.framesArray.every(val => val === 'X')) {
      return true
    }
  }
  
  
  _perfectGame() {
    if (this.frameCount === 10) {
      this.framesArray.forEach((strike, i) => {
        this.framesArray[i] = 10;
        this.bonusPoints += 20;
      });
    } else {
      this.framesArray.pop()
      this.framesArray.pop()
      this.framesArray.forEach((strike, i) => {
        this.framesArray[i] = 10;
        this.bonusPoints += 20;
      });
    }
  }
  
  
  _strikeCalculation(i) {
    if (this.framesArray[i + 1] === 'X' && this.framesArray[i + 2] === 'X') {
      this.bonusPoints += 20
      this._spareConvert(i)
    } else if (this.framesArray[i + 1] === 'X') {
      this.bonusPoints += 10
      this.bonusPoints += this.framesArray[i + 2]
      this._spareConvert(i)
    } else if (this.framesArray[i + 2] === '/') {
      this.bonusPoints += 10
      this._spareConvert(i)
    } else if (this.framesArray[i + 2] === '/') {
      this.bonusPoints += 10
      this._spareConvert(i)
    } else {
      this.bonusPoints += this.framesArray[i + 1] + this.framesArray[i + 2]
      this._spareConvert(i)

    }
  }
  
  _spareConvert(i) {
    this.framesArray[i] = 10
  }
  
  _spareCalculation(i) {
    if (this.framesArray[i + 1] === 'X') {
      this.bonusPoints += 10
      this.framesArray[i] = (10 - this.framesArray[i - 1])
    } else {
      this.bonusPoints += this.framesArray[i + 1]
      this.framesArray[i] = (10 - this.framesArray[i - 1])
    }
  }
}

let scorecard = new BowlingScore
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X')
scorecard.addFrame('X', 'X', 5)

console.log(scorecard.calculateScore())

module.exports = BowlingScore;