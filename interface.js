$(document).ready(function() {
  var game = new Game();

  function updateTotal(){
    $('#total').text('Total: ' + game.scorecard.total);
  }

  function updateGameInfo(){
    $('#game-info').text('Frame: '+ game.frame + '  Roll: ' + game.roll);
  }

  function updateScoreboardInfo(){
    $('#scorecard tr:last').after('<tr><td>' + game.scorecard.scoreboard[game.scorecard.scoreboard.length - 1].frame + '</td><td>' + game.scorecard.scoreboard[game.scorecard.scoreboard.length - 1].roll + '</td><td>' + game.scorecard.rollArray[game.scorecard.rollArray.length - 1] + '</td><td>' + game.scorecard.total + '</td></tr>');
  }

  updateTotal();
  updateGameInfo();

  $('#play-button').click(function() {
    var num = $("#user-input").val();
    num = parseInt(num);
    game.play(num);
    updateTotal();
    updateScoreboardInfo();
    updateGameInfo();
  })
});
