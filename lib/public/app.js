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
    $('#frames').html('');
    game.pinsDown(0);
    game.pinsDown(0);
    gameOver();
    for (var i = game.frameTotals.length; i >= 1; i--) {
      $('#frames').append(game.frameTotals[i]);
      $('#frames').append(' | ');
    };
    $('.submit').attr('disabled', true);
  };
};

function gameOver() {
  if (game.totalScore == 330) { $('#gameOver').append('PERFECT GAME!!!</br>'); }
  $('#gameOver').append('GAME OVER');
};
