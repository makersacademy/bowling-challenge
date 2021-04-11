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
    $('#the-current-score-div').append(`<p class="scorecard-row">Frame | First Roll | Second roll | Total</p>`);
    var counter = 1
    scorecard.generateScorecardInfo().forEach(function(element) {
      if (element.firstRoll === "" && element.secondRoll === "") return;

      console.log(element);
      if (element.frame === 10) {
        $('#the-current-score-div').append(`<p class="scorecard-row">${element.frame} | ${element.firstRoll} | ${element.secondRoll} | ${element.thirdRoll} | ${element.total}</p>`);
      } else {
        $('#the-current-score-div').append(`<p class="scorecard-row">${element.frame} | ${element.firstRoll} | ${element.secondRoll} | ${element.total}</p>`);
      }
      counter++
    });
    for (counter; counter <= 10; counter++) {
      $('#the-current-score-div').append(`<p class="scorecard-row">${counter} | | </p>`)
    }
    $('#the-current-score-div').append(`<p class="scorecard-row">Current Score: ${scorecard.currentScore()}</p>`);
  }
});

// Last line total score continues updating even after end game
