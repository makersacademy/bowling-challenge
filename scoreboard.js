class Scoreboard {
  
  constructor() {
    this.gameScore = 0
    this.throwScores = []
  }

  singleRoll(score) {
    if(score > 10) {
    throw new Error('Score recorded for throw 1 is invalid')
    }
    else
    this.throwScores.push(score)
  }
}

module.exports = Scoreboard;