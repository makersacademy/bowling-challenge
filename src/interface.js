var frame = new Frame();
var game = new Game();

$('.player').submit(function(event) {
  event.preventDefault();
  var name = $('#player_name').val();
  display_player_name(name);
});

function display_player_name(name) {
  $('#display_name').text(name);
}

$('#frame_one').click(function(){
  game.playGame();
  $('.frame_one_score').text(game.totalScore);
});
