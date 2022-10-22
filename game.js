const Scoreboard = require('./scoreboard')
const Frame = require('./frame')

class Game {
  constructor () {
    this.scoreboard = new Scoreboard()
  }

  scoresTotal () {
    return this.scoreboard.scoreTotal()
  }

  play (gameResults) {
    gameResults.forEach((frameElement) => {
      const frame = new Frame()
      frame.ball1(frameElement[0])
      frame.ball2(frameElement[1])
      if (gameResults.indexOf(frameElement) === 9) {
        frame.ball3(frameElement[2])
      }
      this.scoreboard.addFrame(frame)
      this.scoreboard.scoreCalculator(frame)
    })
  }

  getScoreboard () {
    return this.scoreboard
  }

  gutterGame () {
    if (this.scoresTotal() === 0) return true
  }

  perfectGame () {
    if (this.scoresTotal() === 300) return true
  }
}

module.exports = Game

// const game = new Game
// game.scoresTotal()
