const Scorecard = require('./scorecard')
const Frame = require('./frame')

class Game {
  constructor () {
    this.scorecard = new Scorecard()
  }

  scoresTotal () {
    return this.scorecard.scoreTotal()
  }

  run (gameResults) {
    gameResults.forEach((frameElement) => {
      const frame = new Frame(frameElement)
      this.scorecard.addFrame(frame)
      this.scorecard.scoreCalculator(frame)
    })
  }

  getScorecard () {
    return this.scorecard
  }

  checkForGutterGame () {
    if (this.scoresTotal() === 0) return true
  }

  checkForPerfectGame () {
    if (this.scoresTotal() === 300) return true
  }
}

module.exports = Game
