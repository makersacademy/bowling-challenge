$( document ).ready(function() {

  var player = new Player(new ScoreCard);
  var scoreGenerator = new ScoreGenerator();

  var eachRoundScore = function() {
    var card = player.scoreCard.results
    card.forEach(function(item, index) {
      var score = scoreGenerator.getRoundScore(index, card);
      var id = "#score-" + index;
      var id2 = "#scoore-" + index;
      $(id).text(score);
      $(id2).text(score);
    });
  };

  $("#scores").click(function( event ) {
    var result = Number(event.target.id)
    player.bowl(result);
    $("#current-score").text(scoreGenerator.returnScore(player.scoreCard.results));
    $("#round").text(player.roundNumber + 1);
    $("#roll").text(player.rollNumber + 1);
    eachRoundScore();
    if(player.gameOver) { $("#game-over").text("Game over!"); }
  });
});
