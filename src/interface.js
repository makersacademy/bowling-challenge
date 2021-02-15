$(document).ready(function () {
  let game = new Bowling;

  $('#roll-score').submit(function (event) {
    event.preventDefault();
    let roll = $('#roll').val();
    game.roll(roll);
    $('#current-score').text(game.currentScore());
  });

});
