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
  $('#frame_one_one').text(game.frameScore[0][0]);
  $('#frame_one_two').text(game.frameScore[0][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_two').click(function(){
  game.playGame();
  $('#frame_two_one').text(game.frameScore[1][0]);
  $('#frame_two_two').text(game.frameScore[1][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_three').click(function(){
  game.playGame();
  $('#frame_three_one').text(game.frameScore[2][0]);
  $('#frame_three_two').text(game.frameScore[2][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_four').click(function(){
  game.playGame();
  $('#frame_four_one').text(game.frameScore[3][0]);
  $('#frame_four_two').text(game.frameScore[3][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_five').click(function(){
  game.playGame();
  $('#frame_five_one').text(game.frameScore[4][0]);
  $('#frame_five_two').text(game.frameScore[4][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_six').click(function(){
  game.playGame();
  $('#frame_six_one').text(game.frameScore[5][0]);
  $('#frame_six_two').text(game.frameScore[5][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_seven').click(function(){
  game.playGame();
  $('#frame_seven_one').text(game.frameScore[6][0]);
  $('#frame_seven_two').text(game.frameScore[6][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_eight').click(function(){
  game.playGame();
  $('#frame_eight_one').text(game.frameScore[7][0]);
  $('#frame_eight_two').text(game.frameScore[7][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_nine').click(function(){
  game.playGame();
  $('#frame_nine_one').text(game.frameScore[8][0]);
  $('#frame_nine_two').text(game.frameScore[8][1]);
  $('#display_score').text("Score: " + game.totalScore)
});

$('#frame_ten').click(function(){
  game.playGame();
  $('#frame_ten_one').text(game.frameScore[9][0]);
  $('#frame_ten_two').text(game.frameScore[9][1]);
  $('#display_score').text("Score: " + game.totalScore)
});
