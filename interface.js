$(document).ready(function() {

  var game = new Game();

  updateFrame();
  updateScore();
  updateImage();

  $('#roll').on('click', function() {
    game.roll();
    updateFrame();
    updateScore();
    updateImage();
  });

  function updateScore() {
    $('#total-score').text(game.total());

  }

  function updateFrame() {
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    $('#this-frame-pins').text(game._currentFrame.pins());
  };

  function updateImage() {
    $("#pins").attr("src", 'pins/' + game._currentFrame._pins + '_pins.jpeg');
  }

});
