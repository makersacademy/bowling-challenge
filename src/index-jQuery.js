// const BowlingScorecard = require('./BowlingScorecard.js');
// import BowlingScorecard from

let scorecard = new BowlingScorecard()
scorecard.enterRoll(5)
scorecard.enterRoll(4)
scorecard.enterRoll(5)

$( document ).ready(function() {

  alert( "Welcome to the scorecard!");

  $('#the-current-score').text(scorecard.generateScorecardInfo()[0].frame)

  console.log(scorecard.generateScorecardInfo())
});
