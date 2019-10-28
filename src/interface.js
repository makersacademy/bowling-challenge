$(document).ready(function() {

  var game = new Game();

  function updatePage() {
    $('#score').text(game.getScore());
    $('#frame').text(game.getCurrentFrame());
    $('#roll').text(game.getCurrentRoll());
    $('#frameScores').text(game.getFrameScores());
  }

  updatePage();

  $('#enter-pins').submit(function(event){
    event.preventDefault();
    var pins = $('#current-turn').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
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
