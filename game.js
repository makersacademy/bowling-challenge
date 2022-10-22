const Scoreboard = require('./scoreboard')
const Frame = require('./frame')

class Game {
  constructor (){
    this.scoreboard = new Scoreboard
  }

  scoresTotal (){
    return this.scoreboard.scoreTotal()
  }

  play (frameResults) {

    frameResults.forEach(frameElement => {
      let frame = new Frame
      frame.ball1(frameElement[0])
      frame.ball2(frameElement[1])
      this.scoreboard.addFrame(frame)
      this.scoreboard.scoreCalculator(frame)
      //console.log(this.scoreboard.allFrameScores())
    }
      )

    // let frameNumber = 1
    // while (frameNumber < 10) {
    //   let frame = new Frame
    //   frame.ball1(prompt('Ball 1'))
    //   frame.ball2(prompt('Ball 2'))
    //   this.scoreboard.addFrame(frame)
    //   frameNumber += 1
    // }
  }
  
  getScoreboard () {
    return this.scoreboard
  }

}

module.exports = Game

// const game = new Game
// game.scoresTotal()
// [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0]]