class Scoring {
  constructor(scorecard) {
    this.scorecard = scorecard
  }
  regularScorePerFrame() { 
    var regularScore = this.scorecard.map( element => element.reduce(function(a,b){ return a + b }, 0) )
    if ( this.scorecard[9][0] === 10) { regularScore[9] = 10 }
    else { regularScore[9] = this.scorecard[9][0] + this.scorecard[9][1] }
    return regularScore
  }
  getScorecard() {
    return this.scorecard
  }
}

let mockScorecard = { pins: [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 10, 10]
]}

module.exports = Scoring;
