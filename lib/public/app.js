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
  $('#frames').html(game.frameScore);
  $('#frames').append(' | ');
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
  if (game.gameFinished) {
    gameOver();
    $('.submit').attr('disabled', true);
  };
};

function gameOver() {
  $('#gameOver').html('GAME OVER');
};
