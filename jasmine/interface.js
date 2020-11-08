$(document).ready(function() {
  scorecard = new Scorecard();
  $('#Score').text(scorecard.total(10));

  $('#ResetScorecard').on('click', function() { // event listener
    scorecard.resetScorecard(); // update model
    $('#Score').text(scorecard.total(10)); // update view
  });

    $("#my-form").submit(function() {
    event.preventDefault();
    let turn = $('#fname').val();
    let pins = $('#pins').val();
    scorecard.addRoll(turn, pins)
    console.log(scorecard.print(parseInt(turn)))
    // $('#Score').text(scorecard.print(parseInt(turn)))
  });

});
