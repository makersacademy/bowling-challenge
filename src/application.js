$(document).ready(function() {
game = new Game(Frame, LastFrame);

  $('#score_btn').hide();

  $('#pin_btn').click(function() {
    var pins = parseInt($('#pin_count').val());
    game.bowl(pins);
    $('#score_box_' + game.currentFrame + '_1').text(game.frames[game.currentFrame].firstRoll);
    if(game.currentFrame > 0) {
      $('#score_box_' + (game.currentFrame - 1) + '_2').text(game.frames[game.currentFrame -1].secondRoll);
    };
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