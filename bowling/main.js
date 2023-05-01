const Scoreboard = require('./score')

let scorecard = new Scoreboard()

scorecard.calculateScore() // returns 0
// scorecard.addFrame(2, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
// scorecard.addFrame(3, 5)
 scorecard.addFrame(10)
 scorecard.addFrame(10)

console.log(scorecard.calculateScore())