$( document ).ready(function() {

  var player = new Player(new ScoreCard);
  var scoreGenerator = new ScoreGenerator();

  $("#bowl").click(function( event ) {
    var result = document.getElementById("score").value;
    player.bowl(result);
    $("#current-score").text(scoreGenerator.returnScore(player.scoreCard.results));
    if(player.gameOver) { $("#game-over").text("Game over!")}
  });
});
