$( document ).ready(function() {
  bowlingGame = new Game();

  // Functions Start

  function updateScores() {
    calculations();
    updateRolls();
    updateFrameTotal();
    updateGameTotal();
  };

  function calculations() {
    bowlingGame.calculateFrameScore();
    bowlingGame.calculateBonus();
    bowlingGame.frameTotalScore();
    bowlingGame.gameTotalScore();
  }

  function updateRolls() {
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
    $('#frame10_roll3').text(bowlingGame.previousRolls[20])
  }

  function updateFrameTotal() {
    $('#frame1_total').text(bowlingGame.scores.array[0].frameScore)
    $('#frame2_total').text(bowlingGame.scores.array[1].frameScore)
    $('#frame3_total').text(bowlingGame.scores.array[2].frameScore)
    $('#frame4_total').text(bowlingGame.scores.array[3].frameScore)
    $('#frame5_total').text(bowlingGame.scores.array[4].frameScore)
    $('#frame6_total').text(bowlingGame.scores.array[5].frameScore)
    $('#frame7_total').text(bowlingGame.scores.array[6].frameScore)
    $('#frame8_total').text(bowlingGame.scores.array[7].frameScore)
    $('#frame9_total').text(bowlingGame.scores.array[8].frameScore)
    $('#frame10_total').text(bowlingGame.scores.array[9].frameScore)
  }

  function updateGameTotal() {
    $( '#gameTotal' ).text(bowlingGame.gameScore);
  }

  // Functions End

  $('button').click(function() {
    try {
      bowlingGame.addScore(parseInt($(this).text()));
    } catch (err) {
      alert(err.message)
    }
    updateScores();
  });
});
