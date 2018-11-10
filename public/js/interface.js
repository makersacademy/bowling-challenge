$( document ).ready(function() {
  bowlingGame = new Game();

  // Functions Start

  function updateScores() {
    $('#frame1_roll1').text(bowlingGame.previousRolls[0])
    $('#frame1_roll2').text(bowlingGame.previousRolls[1])
    $('#frame2_roll1').text(bowlingGame.previousRolls[2])
    $('#frame2_roll2').text(bowlingGame.previousRolls[3])
    $('#frame3_roll1').text(bowlingGame.previousRolls[4])
    $('#frame3_roll2').text(bowlingGame.previousRolls[5])
    $('#frame4_roll1').text(bowlingGame.previousRolls[6])
    $('#frame4_roll2').text(bowlingGame.previousRolls[7])
    $('#frame5_roll1').text(bowlingGame.previousRolls[8])
    $('#frame5_roll2').text(bowlingGame.previousRolls[9])
    $('#frame6_roll1').text(bowlingGame.previousRolls[10])
    $('#frame6_roll2').text(bowlingGame.previousRolls[11])
    $('#frame7_roll1').text(bowlingGame.previousRolls[12])
    $('#frame7_roll2').text(bowlingGame.previousRolls[13])
    $('#frame8_roll1').text(bowlingGame.previousRolls[14])
    $('#frame8_roll2').text(bowlingGame.previousRolls[15])
    $('#frame9_roll1').text(bowlingGame.previousRolls[16])
    $('#frame9_roll2').text(bowlingGame.previousRolls[17])
    $('#frame10_roll1').text(bowlingGame.previousRolls[18])
    $('#frame10_roll2').text(bowlingGame.previousRolls[19])
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
