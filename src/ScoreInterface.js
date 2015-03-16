$(document).ready(function(){
});

currentPlayer = function() {
  return scoretables.whosTurnIsIt();
};

var players = [];
  for (var i=1; i < localStorage.length + 1; i++) {
    players.push(localStorage[i]);
  };

scoretables = new ScoreTables(players);
scoretables.scoreCards[0].playTurn = true;

$( '#submit' ).click(function(e) {
  e.preventDefault();
  var rollScore = $("#score").val();
  scoretables.scoreCards[currentPlayer()].addScore(parseInt(rollScore));
  document.getElementById("p1").innerHTML = scoretables.displayAllTables();
  scoretables.whosTurnIsIt()
});

$('.instruction').text("It's"+scoretables.scoreCards[currentPlayer()].name+"'s turn to play");

document.getElementById("p1").innerHTML = scoretables.displayAllTables();

$("#button1").click( function() {
  localStorage.clear();
});

