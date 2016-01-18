$(document).ready(function() {
  var bowlingGame = new BowlingGame()
  function updateScores() {
    $('#T1_1').text(bowlingGame.gameScores[0]);
    $('#T1_2').text(bowlingGame.gameScores[1]);
    $('#T1_').text(bowlingGame.gameScores[0] + bowlingGame.gameScores[1]);
    $('#T2_1').text(bowlingGame.gameScores[2]);
    $('#T2_2').text(bowlingGame.gameScores[3]);
    $('#T2_').text(bowlingGame.gameScores[2] + bowlingGame.gameScores[3]);
  }



  $('#scoreOne').on('click', function(){
    bowlingGame.scoreInput(1)
    updateScores();
  });

  $('#scoreTwo').on('click', function(){
    bowlingGame.scoreInput(2)
    $('#T1_2').text(1);
  });
});
