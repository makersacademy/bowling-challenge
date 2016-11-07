$(document).ready(function() {

  var game = new Game();
  var rollIndex = 0;

  function updateScore() {
    $('#score').text(game.result);
  }
  updateScore();

  $('#roll').click(function() {
    game.roll(10);
    console.log(game._rolls[rollIndex])
    // if game.isStrike() {
    //
    //   $('#announcements').text("Strike!");
    // }
    rollIndex ++;
  });

});
