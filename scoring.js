class Scoring {
  constructor(scorecard) {
    this.scorecard = scorecard
    this.bonusScore = []
    this.regularScore = []
    this.totalScorePerFrame = []
    this.totalScore = null
    this.n = 0
  }
  regularScorePerFrame() { 
    // var regularScore = []
    this.regularScore = this.scorecard.map( element => element.reduce(function(a,b){ return a + b }, 0) )
    if ( this.scorecard[9][0] === 10) { this.regularScore[9] = 10 }
    else { this.regularScore[9] = this.scorecard[9][0] + this.scorecard[9][1] }
  }
  bonusScore8Frames() {
    var frameBonus = 0
    while ( this.n < 8 ) {
      // 3 or 2 strikes in a row
      if ( this.scorecard[this.n][0] == 10 && this.scorecard[this.n + 1 ][0] == 10 && this.scorecard[this.n + 2][0] == 10) {
        frameBonus = this.scorecard[this.n + 1 ][0] + this.scorecard[this.n + 2 ][0]
      } 
      //  1 strike in a row
      else if ( this.scorecard[this.n][0] == 10 ) {
        frameBonus = this.scorecard[this.n + 1 ][0] + this.scorecard[this.n + 1 ][1]
      }
      // split
      else if ( this.scorecard[this.n][0] + this.scorecard[this.n][1] == 10 ) {
        frameBonus = this.scorecard[this.n + 1][0]
      };
      this.bonusScore.push(frameBonus);
      this.n += 1; 
    }
  }
  bonusScoreFrame9() {
    var frameBonus = 0
    // 3 or 2 or 1 strikes in a row
    if ( this.scorecard[8][0] == 10 && this.scorecard[8 + 1 ][0] == 10 && this.scorecard[8 + 1][1] == 10) {
      frameBonus = this.scorecard[8 + 1][0] + this.scorecard[8 + 1][1]
    } 
    // split
    else if ( this.scorecard[8][0] + this.scorecard[8][1] == 10 ) {
      frameBonus = this.scorecard[8 + 1][0]
    };
    this.bonusScore.push(frameBonus);
  }
  bonusScoreFrame10() {
    var frameBonus = 0
    // 3 or 2 or 1 strikes in a row
    if ( this.scorecard[9][0] == 10 ) {
      frameBonus = this.scorecard[9][1] + this.scorecard[9][2]
    } 
    // split
    else {
      frameBonus = this.scorecard[9][2]
    };
    this.bonusScore.push(frameBonus);
  }
  bonusScoreAllFrames() {
    this.bonusScore8Frames();
    this.bonusScoreFrame9();
    this.bonusScoreFrame10();

    // DO the below
    // return this.bonusScore = this.bonusScore.map( element => element.reduce(function(a,b){ return a + b }, 0) )
    // this.regularScore = this.scorecard.map( element => element.reduce(function(a,b){ return a + b }, 0) )

  }
  totalScoreAllFrames() {
    let n = 0
    while ( n < 10 ) {
      this.totalScorePerFrame.push( this.regularScore[n] + this.bonusScore[0] );
      n += 1
    }
  }
  findTotalScore() {
    for (let i = 0; i < 10; i++) {
      this.totalScore += this.totalScorePerFrame[i]
    }
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

scoring = new Scoring(mockScorecard.pins)
// console.log(scoring.bonusScore8Frames())
// console.log(scoring.bonusScoreFrame9())
// console.log(scoring.bonusScoreFrame10())
// console.log('bonus scores below')


scoring.regularScorePerFrame()
console.log('regular scores below')
console.log(scoring.regularScore)

scoring.bonusScoreAllFrames()
console.log('bonus scores below')
console.log(scoring.bonusScore)

scoring.totalScoreAllFrames()
console.log('total scores below')
console.log(scoring.totalScorePerFrame)

scoring.findTotalScore()
console.log('total score below')
console.log(scoring.totalScore)

module.exports = Scoring;
