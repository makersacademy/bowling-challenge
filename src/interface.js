$(document).ready(function () {
  var scorecard = new Scorecard

  $('#new-roll').submit(function (event) {
    event.preventDefault();
    scorecard.roll(parseInt($("#roll").val()))
    printScores()
  })

  function printScores() {
    $("#scores").text(`Total score: ${scorecard.score()}`)
  }
})