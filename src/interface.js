$(document).ready(function() {
  player = new Player();
  scorecard = new Scorecard();
  game = new Game();

  function updateTable() {
    $("#player1total").text(scorecard.score());
    $("#frame1player1score1").text(scorecard._framescores[1][0]);
    $("#frame1player1score2").text(scorecard._framescores[1][1]);
    $("#frame2player1score1").text(scorecard._framescores[2][0]);
    $("#frame2player1score2").text(scorecard._framescores[2][1]);
    $("#frame3player1score1").text(scorecard._framescores[3][0]);
    $("#frame3player1score2").text(scorecard._framescores[3][1]);
    $("#frame4player1score1").text(scorecard._framescores[4][0]);
    $("#frame4player1score2").text(scorecard._framescores[4][1]);
    $("#frame5player1score1").text(scorecard._framescores[5][0]);
    $("#frame5player1score2").text(scorecard._framescores[5][1]);
    $("#frame6player1score1").text(scorecard._framescores[6][0]);
    $("#frame6player1score2").text(scorecard._framescores[6][1]);
    $("#frame7player1score1").text(scorecard._framescores[7][0]);
    $("#frame7player1score2").text(scorecard._framescores[7][1]);
    $("#frame8player1score1").text(scorecard._framescores[8][0]);
    $("#frame8player1score2").text(scorecard._framescores[8][1]);
    $("#frame9player1score1").text(scorecard._framescores[9][0]);
    $("#frame9player1score2").text(scorecard._framescores[9][1]);
    $("#frame10player1score1").text(scorecard._framescores[10][0]);
    $("#frame10player1score2").text(scorecard._framescores[10][1]);
    $("#bonus1player1").text(scorecard._framescores[11][0]);
    $("#bonus2player1").text(scorecard._framescores[12][0]);
    $("#error").text(" ");
  }

  $('[id^=roll]').click(function() {
    var id = event.target.id;
    var number = parseInt(id.replace("roll", ""));
    try {
      player.roll(number, game, scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });
});
