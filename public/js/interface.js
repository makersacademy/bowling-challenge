$( document ).ready(function() {
  bowlingGame = new Game();

  // Functions Start

  function updateScores() {
    bowlingGame.calculateFrameScore();
    bowlingGame.calculateBonus();
    bowlingGame.scores.frameTotalScore();
    $('#frame1_roll1').text(bowlingGame.scores.array[0].roll1)
    $('#frame1_roll2').text(bowlingGame.scores.array[0].roll2)
    $('#frame2_roll1').text(bowlingGame.scores.array[1].roll1)
    $('#frame2_roll2').text(bowlingGame.scores.array[1].roll2)
    $('#frame3_roll1').text(bowlingGame.scores.array[2].roll1)
    $('#frame3_roll2').text(bowlingGame.scores.array[2].roll2)
    $('#frame4_roll1').text(bowlingGame.scores.array[3].roll1)
    $('#frame4_roll2').text(bowlingGame.scores.array[3].roll2)
    $('#frame5_roll1').text(bowlingGame.scores.array[4].roll1)
    $('#frame5_roll2').text(bowlingGame.scores.array[4].roll2)
    $('#frame6_roll1').text(bowlingGame.scores.array[5].roll1)
    $('#frame6_roll2').text(bowlingGame.scores.array[5].roll2)
    $('#frame7_roll1').text(bowlingGame.scores.array[6].roll1)
    $('#frame7_roll2').text(bowlingGame.scores.array[6].roll2)
    $('#frame8_roll1').text(bowlingGame.scores.array[7].roll1)
    $('#frame8_roll2').text(bowlingGame.scores.array[7].roll2)
    $('#frame9_roll1').text(bowlingGame.scores.array[8].roll1)
    $('#frame9_roll2').text(bowlingGame.scores.array[8].roll2)
    $('#frame10_roll1').text(bowlingGame.scores.array[9].roll1)
    $('#frame10_roll2').text(bowlingGame.scores.array[9].roll2)
  };

  // function hideButtons() {
  //   if (bowlingGame.roll = 2) {
  //     $('button').hide();
  //   } else {
  //
  //   }
  // }

  function dislayFrameTotal() {
    index = bowlingGame.frame - 1
    $('#frame1_total').text(bowlingGame.scores.array[index].frameScore)
  }

  // function gameTotal() {
  //   bowlingGame.calculateFrameScore();
  //   bowlingGame.calculateBonus();
  //   $( '#gameTotal' ).text(bowlingGame.gameScore);
  // }

  // Functions End

  $('button').click(function() {
    try {
      bowlingGame.addScore(parseInt($(this).text()));
    } catch (err) {
      alert(err.message)
    }
    updateScores();
    dislayFrameTotal();
  });
});
