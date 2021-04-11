// const BowlingScorecard = require('./BowlingScorecard.js');
// import BowlingScorecard from

let scorecard = new BowlingScorecard()
// scorecard.enterRoll(5)
// scorecard.enterRoll(4)
// scorecard.enterRoll(5)
// scorecard.enterRoll(5)
// scorecard.enterRoll(5)
// scorecard.enterRoll(5)

$( document ).ready(function() {

  // alert( "Welcome to the scorecard!");
  // console.log(scorecard._tidyDisplay(5))
  displayScorecard()

  $( '#enterRoll-form' ).submit(function( event ) {
    let score = $("#rollScore").val()
    console.log(scorecard.enterRoll(score))
    displayScorecard()
    event.preventDefault();
  });

  function displayScorecard() {
    $('#the-current-score-div').empty()
    $('#the-current-score-div').append(`<p class="scorecard-row">Your current scorecard:</p>`);
    $('#the-current-score-div').append(`<p class="scorecard-row">Frame | First Roll | Second roll</p>`);
    var counter = 1
    scorecard.generateScorecardInfo().forEach(function(element) {
      console.log(element);
      $('#the-current-score-div').append(`<p class="scorecard-row">${element.frame} | ${element.firstRoll} | ${element.secondRoll}</p>`);
      counter++
    });
    for (counter; counter <= 10; counter++) {
      $('#the-current-score-div').append(`<p class="scorecard-row">${counter} | | </p>`)
    }
  }
});

// Create a function to print out the scorecard
// create a function which returns an error message when the score is invalid.
