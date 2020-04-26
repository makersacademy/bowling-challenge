
$(document).ready(function() {
    var scorecard = new Scorecard();
    $('#round_one').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl').val()),
          ball2 = parseInt($('#usersSecondBowl').val());
        $('#usersFirstBowl').val('');
        $('#usersSecondBowl').val('');
        scorecard.firstBowl(ball1);
        scorecard.secondBowl(ball2);
        scorecard.roundSummary();
        roundTotal();
    })

  function roundTotal() {
    $('#result_round_one').text(scorecard.printFrameScore());
  };
})
