$(document).ready(function(){
  var game = new Game();

  $('#total-score').text(game.getTotalScore());
  $('#frame-number').text(game.frameNumber);
  $('#new-frame').click(function(){
    game.newFrame();
    $('#frame-number').text(game.frameNumber)
  });
});
