jQuery(document).ready(function () {

  var game = new BowlingGame();

  $('#current_score').text(game.currentScore);


  $('#bowl').on('click', function () {
    var pins = Math.floor((Math.random() * 10) + 1);
    console.log(pins)
    game.roll(pins);
    game.score();
    $('#current_score').text(game.currentScore);
  });



});
