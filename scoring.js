class Scoring {
  constructor(scorecard) {
    this.scorecard = scorecard
  }
  // regularScorePerFrame() { 
  //   return this.scorecard.map( element => 
  //     if ( element[0] === 10 ) { return element => 10 }
  //     else { return element => element[0] + element[1] }
  //   )
  // }
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
console.log(scoring.scorecard.map( element =>  element[0] ))
module.exports = Scoring;

    // return this.scorecard.map(
    //   if ( element[0] === 10 ) { element => 10 }
    //   else { element => element[0] + element[1] }
    // )