$(document).ready(function() {

  var game = new Game();

  function updateScore() {
    $('#score').text(game.getScore());
  }

  $('#enter-pins').submit(function(event){
    event.preventDefault();
    var pins = $('#current-turn').val();
    pins = Number(pins)
    game.roll(pins);
    updateScore();
    console.log(game.getCurrentFrame());
    console.log(game.getCurrentRoll());
    console.log(game.getScoreCard());

    console.log(game.getScore());
    console.log(game.getFrameScores());
    console.log(game.bonuses());
    console.log(game.getframes());
    console.log(game.getRolls());
    console.log(game.getPins());
  });
});
