$(document).ready(function() {
  var game = new Game();
  updateScore();

  $('#frame1-roll1').change(function() {
    var frame1_roll1 = $('#frame1-roll1').val();
  })

  $('#frame1-roll2').change(function() {
    var frame1_roll2 = $('#frame1-roll2').val();
  })

  $('#frame1').click(function() {
    game.frame_score(frame1_roll1, frame1_roll2);
    updateScore();
  })


  function updateScore() {
    $('#score').text(game._total_score);
  };


});
