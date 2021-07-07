
$(document).ready(function() {
    var scorecard = new Scorecard();
    var scorecard2 = new Scorecard();
    var scorecard3 = new Scorecard();
    var scorecard4 = new Scorecard();
    var scorecard5 = new Scorecard();

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

    $('#round_three').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl3').val()),
          ball2 = parseInt($('#usersSecondBowl3').val());
        $('#usersFirstBowl3').val('');
        $('#usersSecondBowl3').val('');
        scorecard3.firstBowl(ball1);
        scorecard3.secondBowl(ball2);
        scorecard3.roundSummary();
        round3Total();
    })

    $('#round_four').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl4').val()),
          ball2 = parseInt($('#usersSecondBowl4').val());
        $('#usersFirstBowl4').val('');
        $('#usersSecondBowl4').val('');
        scorecard4.firstBowl(ball1);
        scorecard4.secondBowl(ball2);
        scorecard4.roundSummary();
        round4Total();
    })

    $('#round_five').submit(function(event) {
      event.preventDefault();
      var ball1 = parseInt($('#usersFirstBowl5').val()),
          ball2 = parseInt($('#usersSecondBowl5').val());
        $('#usersFirstBowl5').val('');
        $('#usersSecondBowl5').val('');
        scorecard5.firstBowl(ball1);
        scorecard5.secondBowl(ball2);
        scorecard5.roundSummary();
        round5Total();
    })

  function round1Total() {
    $('#result_round_one').text(scorecard.printFrameScore());
  };

  function round2Total() {
    $('#result_round_two').text(scorecard2.printFrameScore());
  };

  function round3Total() {
    $('#result_round_three').text(scorecard3.printFrameScore());
  };

  function round4Total() {
    $('#result_round_four').text(scorecard4.printFrameScore());
  };

  function round5Total() {
    $('#result_round_five').text(scorecard5.printFrameScore());
  };
})
