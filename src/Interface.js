var scorecard = new Scorecard();

$(document).ready(function() {
  

  var following_roll = function() {
    for (var i = 1; i <= 21; i ++){
      $('.cell' + i).text(scorecard.displayScores[i - 1]);
    };
  };

  $('#reset_game').on('click', function() {
    location.reload();
  });

  $('#enter_0').on('click', function() {
    scorecard.add(0);
    following_roll();
  });

  $('#enter_1').on('click', function() {
    scorecard.add(1);
    following_roll();
  });

  $('#enter_2').on('click', function() {
    scorecard.add(2);
    following_roll();
  });

  $('#enter_3').on('click', function() {
    scorecard.add(3);
    following_roll();
  });

  $('#enter_4').on('click', function() {
    scorecard.add(4);
    following_roll();
  });

  $('#enter_5').on('click', function() {
    scorecard.add(5);
    following_roll();
  });

  $('#enter_6').on('click', function() {
    scorecard.add(6);
    following_roll();
  });

  $('#enter_7').on('click', function() {
    scorecard.add(7);
    following_roll();
  });

  $('#enter_8').on('click', function() {
    scorecard.add(8);
    following_roll();
  });

  $('#enter_9').on('click', function() {
    scorecard.add(9);
    following_roll();
  });

  $('#enter_10').on('click', function() {
    scorecard.add(10);
    following_roll();
  });

  $('#final_frame_scores').on('click', function() {
    scorecard.cumulCalc();
    var frame_tally = function() {
      for (var i = 1; i <= 10; i ++){
        $('#f' + i).text(scorecard.cumul_score[i-1]);
      };
    };
    frame_tally();
  });
});
