game = new Game();
$('.submit').click(function() {
  pinsDown = $( this ).val();
  game.pinsDown(pinsDown);
  updatePins();
  for (var i = 11-pinsDown; i < 11; i++) {
    $('#buttons button:eq(' + i + ')').hide();
  }
  if (game.isFrameFinished()) {
    updateFrame();
    $('#buttons button').show();
  }
  if (game.gameFinished) {
    gameOver();
    $('.submit').attr('disabled', true);
  };
  $('#total').html(game.totalScore);
});

function updatePins() {
  $('#pins').append(pinsDown + " ");
};

function updateFrame() {
  $('#frames').html(game.frameScore);
  $('#frames').append(' | ');
  $('#pins').append('|| ');

};

function gameOver() {
  $('#gameOver').html('GAME OVER');
};
