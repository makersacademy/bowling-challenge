
$(document).ready(function() {
    var scorecard = new Scorecard();
    var scorecard2 = new Scorecard();
    $('#round_one').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl').val()),
          ball2 = parseInt($('#usersSecondBowl').val());
        $('#usersFirstBowl').val('');
        $('#usersSecondBowl').val('');
        scorecard.firstBowl(ball1);
        scorecard.secondBowl(ball2);
        scorecard.roundSummary();
        round1Total();
    })

    $('#round_two').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl2').val()),
          ball2 = parseInt($('#usersSecondBowl2').val());
        $('#usersFirstBowl2').val('');
        $('#usersSecondBowl2').val('');
        scorecard2.firstBowl(ball1);
        scorecard2.secondBowl(ball2);
        scorecard2.roundSummary();
        round2Total();
    })

  function round1Total() {
    $('#allScores').text(scorecard.printFrameScore());
  };

  function round2Total() {
    $('#result_round_two').text(scorecard2.printFrameScore());
  };
})
