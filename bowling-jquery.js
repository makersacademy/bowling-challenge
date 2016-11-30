$( document ).ready(function() {
var bowlingGame = new BowlingGame();


function getTotalScore() {
  $("#totalscore").text(bowlingGame.totalScore);
}

function getAllFrameScores() {
  $("#allframescores").text(bowlingGame.allFrameScores.toString().split(", "));
}

function getAllBowls() {
  $("#allbowls").text(bowlingGame.allBowls.toString().split(", "));
}

getTotalScore();

$("#5").on('click', function() {
  bowlingGame.playerTurn(5);
  getTotalScore();
  getAllFrameScores();
  getAllBowls();
});

$("#10").on('click', function() {
  bowlingGame.playerTurn(10);
  getTotalScore();
  getAllFrameScores();
  getAllBowls();
});

});
