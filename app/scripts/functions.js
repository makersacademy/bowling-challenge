$( document ).ready(function() {

  var rounds, parser, scoreCard, player, scoreGenerator;
  rounds = [];
  for(var i = 0; i < 9; i++) {
    rounds.push(new Round());
  }
  rounds.push(new Round(true));
  parser = new ScoreCardParser();
  scoreCard = new ScoreCard(rounds, parser)
  player = new Player(scoreCard);
  game = new Game(player);

  scoreGenerator = new ScoreGenerator();

  var updateFields = function() {
    var card = scoreCard.parse()
    $("#current-score").text(scoreGenerator.returnScore(card));
    if(game.over) {
      $("#game-over").text("Game over!");
    } else {
      $("#round").text(game.round + 1);
      $("#roll").text(game.roll());
    }
  }

  var updateRoundScores = function() {
    var card = scoreCard.parse(), score = 0;
    card.forEach(function(item, index) {
      if(index > game.round) {
        score = "-";
      } else if(index < game.round || game.over) {
        score += scoreGenerator.getRoundScore(index, card);
      } else { score = scoreGenerator.getRoundScore(index, card); }
      var id = "#scoore-" + index;
      $(id).text(score);
    });
  };

  $("#scores").click(function( event ) {
    var result = Number(event.target.id)
    game.play(result);
    updateFields();
    updateRoundScores();
  });
});
