$(document).ready(function() {

  var game = new Game();

  updateFrame();
  updateScore();

  $('#roll').on('click', function() {
    game.roll();
    updateFrame();
    updateScore();
  });

  function updateScore() {
    $('#total-score').text(game.total());
    // if(game.total() > 20) {
    //   $('#total-score').css('color', 'red')
    // }
  }

  function updateFrame() {
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    $('#this-frame-pins').text(game._currentFrame.pins());
  };

});
