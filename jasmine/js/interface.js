$(document).ready(function() {
  var game = new BowlingGame();

  showCurrentFrame();

  $('#roll').click(function() {
    game.roll($('#rollOne').val(), $('#rollTwo').val());
    showCurrentFrame();
  });

  function showCurrentFrame() {
    $('#current-frame').text(game._currentFrame);
  }

  // function clearFields() {
  //   $('#rollOne').value = "";
  //   $('#rollTwo').value = "";
  // }
});
