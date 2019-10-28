$(document).ready(function() {

  var game = new Game();

  $('#score').text(game.getScore());

  $('#enter-pins').submit(function(event){
    event.preventDefault();
    var pins = $('#current-turn').val();
    pins = Number(pins)
    game.roll(pins);

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
})
