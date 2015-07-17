game = new Game();
$('.submit').click(function() {
  pinsDown = $( this ).val();
  game.pinsDown(pinsDown);
  updatePins();
  buttonHide();
  checkFrameAndGame();
  $('#total').html(game.totalScore);
});

function updatePins() {
  $('#pins').append(pinsDown + " ");
};

function updateFrame() {
  $('#frames').html('');
  for (var i = game.frameTotals.length; i >= 0; i--) {
    $('#frames').append(game.frameTotals[i]);
    $('#frames').append(' | ');
  };
  $('#pins').append('|| ');
};

function buttonHide() {
  for (var i = 11-pinsDown; i < 11; i++) {
    $('#buttons button:eq(' + i + ')').hide();
  };
};

function checkFrameAndGame() {
  if (game.isFrameFinished()) {
    updateFrame();
    $('#buttons button').show();
  }
  if (game.isGameFinished()) {
    gameOver();
    $('.submit').attr('disabled', true);
  };
};

function gameOver() {
  $('#gameOver').html('GAME OVER');
};
