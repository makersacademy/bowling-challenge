$(document).ready(function () {
  scorecard = new Scorecard;
  player1 = new Player;
  player2 = new Player;
  player1counter = 1;
  player2counter = 1;

  frameScoreInsert = function () {
    for (i = 1; i <= 2; i++) {
      if (i == 1) {
        for (j = 1; j <= player1._array.length; j++) {
          $('#p' + i.toString() + 'f' + j.toString()).text((player1._array[j - 1]))
        }
      } else {
        for (k = 1; k <= player2._array.length; k++) {
          $('#p' + i.toString() + 'f' + k.toString()).text((player2._array[k - 1]))
        };
      };
    }
  }

  $('#score-input').submit(function (event) {

    event.preventDefault();
    var player = $('#player-selected').val();
    var score1 = parseInt($('#score1-input').val());
    var score2 = parseInt($('#score2-input').val());
    var score3 = parseInt($('#score3-input').val());

    if (player == "Player 1" && player1counter <= 9) {
      if (score1 + score2 > 10) {
        $('#error-message').text('Maximum score of 10 allowed')
      }
      player1counter += 1
      scorecard.frameAdd(player1, score1, score2)
      frameScoreInsert();
      var total1 = scorecard.scoreTracker(player1, player1._array.length)
      $('#p1total').text(total1)
    } else if (player == "Player 2" && player2counter <= 9) {
      if (score1 + score2 > 10) {
        $('#error-message').text('Maximum score of 10 allowed')
      }
      player2counter += 1
      scorecard.frameAdd(player2, score1, score2)
      frameScoreInsert();
      var total2 = scorecard.scoreTracker(player2, player2._array.length)
      $('#p2total').text(total2)

    } else if (player == "Player 1" && player1counter > 9) {
      scorecard.frameTenAdd(player1, score1, score2, score3)
      $('#p1f10').text((player1._array[9]))
      var total3 = scorecard.frameTenTracker(player1)
      $('#p1total').text(total3)
    } else if (player == "Player 2" && player2counter > 9) {
      scorecard.frameTenAdd(player2, score1, score2, score3)
      $('#p2f10').text((player2._array[9]))
      var total4 = scorecard.frameTenTracker(player2)
      $('#p2total').text(total4)
    };
  });
});