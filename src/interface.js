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
      $("#error").text(" ");
    }

  $('#roll0').click(function() {
    try {
      player.roll(0, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll1').click(function() {
    try {
      player.roll(1, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll2').click(function() {
    try {
      player.roll(2, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll3').click(function() {
    try {
      player.roll(3, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll4').click(function() {
    try {
      player.roll(4, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll5').click(function() {
    try {
      player.roll(5, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll6').click(function() {
    try {
      player.roll(6, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll7').click(function() {
    try {
      player.roll(7, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });


  $('#roll8').click(function() {
    try {
      player.roll(8, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll9').click(function() {
    try {
      player.roll(9, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });

  $('#roll10').click(function() {
    try {
      player.roll(10, game.getFrame(scorecard), scorecard);
      updateTable();
    } catch(err) {
      document.getElementById("error").innerHTML = err.message;
    }
  });
});
