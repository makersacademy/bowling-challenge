$(document).ready(function() {
game = new Game(Frame, LastFrame);

  $('#frame_scores').text(game.frameScores);
  $('#game_score').text(game.gameScore);
  $('#score_btn').hide();

  $('#pin_btn').click(function() {
    var pins = parseInt($('#pin_count').val());
    game.bowl(pins);
    $('#frame_scores').text(game.frameScores);
    if(game.isGameOver()){
      $('#score_box').hide(500);
      $('#score_btn').show(500);
    };
  });

  $('#score_btn').click(function() {
    game.calculateScore();
    $('#game_score').text(game.gameScore);
  });






});