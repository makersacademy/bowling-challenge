$(document).ready(function() {
game = new Game(Frame, LastFrame);

  $('#score_btn').hide();

  $('#pin_btn').click(function() {
    var pins = parseInt($('#pin_count').val());
    game.bowl(pins);
    var currentFrame = game.currentFrame;
    $('#score_box_' + currentFrame + '_1').text(game.frames[currentFrame].firstRoll);
    if(game.currentFrame > 0) {
      $('#score_box_' + (currentFrame - 1) + '_2').text(game.frames[currentFrame -1].secondRoll);
      $('#frame_score_' + (currentFrame - 1)).text(game.frameScores[currentFrame - 1])
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