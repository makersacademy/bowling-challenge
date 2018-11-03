$(document).ready(function() {

  var game = new Game();

  $('#frame_submit').click(function() {
    var bowl1 = $('#frame1_bowl1').val();
    var bowl2 = $('#frame1_bowl2').val();
    game.frame(Number(bowl1), Number(bowl2));
    $('#frame1_score').text(game.scoreCard[0].frameScore);
    $('#frame1_running_score').text(game.scoreCard[0].runningScore);
    $('#frame1_notes').text('');
  })

})
