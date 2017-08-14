$( document ).ready(function() {

  var rounds, parser, scoreCard, player, game, scoreGenerator;
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

  var updateAll = function(round, roll, result, card) {
    updateRollFields(round, roll, result);
    updateGameFields(roll, card);
    updateRoundScores(card);
    updateButtons(round, roll);
  }

  var updateRollFields = function(round, roll, result) {
    var roundArray = game.getRound(round), finalRoll = roll;
    if (result === 10) {
      result = "X";
      if(round < 9 && roll === 1) { finalRoll += 1; }
    }
    if (((roundArray[roll - 2] || 0) + (roundArray[roll - 1] || 0) === 10) && roll !== 1) {
      result = "/";
      finalRoll = roll;
    }
    var roundField = "#rolls-" + round;
    var rollField = "#roll-" + finalRoll;
    $(".score-container").find(roundField).find(rollField).text(result);
    if(game.over) { $("#game-over").text("Game over!"); }
  }

  var updateGameFields = function(roll, card) {
    $("#current-score").text(scoreGenerator.returnScore(card));
    $("#round").text(game.round + 1);
    $("#roll").text(roll);
  }

  var updateButtons = function() {
    var max = game.maximumScore();
    if(game.over) { gameOver(); }
    for(var i = 0; i <= 10; i++) {
      var id = "#" + i;
      if(i < max) {
        $(id).show();
        $(id).text(i);
      } else if(i > max) {
        $(id).hide()
      } else if(i === max) {
        $(id).show()
        var display = strikeOrSpare()
        $(id).text(display);
      }
    }
  }

  var gameOver = function() {
    $(".buttons").hide();
    $("#_round").hide();
    $("#enter-score").text("GAME OVER!")
    $(".button-container").height('100px')
  }

  var strikeOrSpare = function() {
    var round = game.round, roll = game.roll();
    var roundArray = game.getRound(round);
    if(roll === 1
       || (roundArray[0] === 10 && roll === 2)
       || ((roundArray[0] + roundArray[1]) % 10 === 0 && roll === 3)) {
         return "X";
    } else { return "/"; }
  };

  var updateRoundScores = function(card) {
    var score = 0;
    card.forEach(function(item, index) {
      if(index > game.round) {
        score = "-";
      } else if(index < game.round || game.over) {
        score += scoreGenerator.getRoundScore(index, card);
      } else { score = scoreGenerator.getRoundScore(index, card); }
      var id = "#score-" + index;
      $(id).text(score);
    });
  };

  $("#button-container").click(function( event ) {
    var result = Number(event.target.id)
    if(!(result >= 0) || !(result <= 10)) { return };

    var round = game.round, roll = game.roll();
    var status = game.play(result);
    if(status) {
      var card = scoreCard.parse()
      updateAll(round, roll, result, card);
    }
  });
});
