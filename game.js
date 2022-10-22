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
      const frame = new Frame()
      frame.ball1(frameElement[0])
      frame.ball2(frameElement[1])
      if (gameResults.indexOf(frameElement) === 9) {
        frame.ball3(frameElement[2])
      }
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

// const game = new Game
// game.scoresTotal()
