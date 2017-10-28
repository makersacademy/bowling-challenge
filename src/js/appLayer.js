'use strict';

var game = new Game();

updateScore();
updateSelection();

$('#pin-selection').on('click', ".pins", function () {
  game.bowl(Number($(this).val()));
  updateScore();
  updateSelection();
  updateFrame();
});

function updateFrame() {
  $('#current-frame').text(game.currentFrame());
}

function updateScore() {
  $('#current-score').text(game.score());
};

function updateSelection() {
  $('#pin-selection').empty();
  if (isGameEnded()) return;
  for (var i = 1; i <= game.pinsRemaining(); i++) {
    $('#pin-selection').append('<button class="pins" value="' + i + '">' + i + '</button>')
  };
};

function isGameEnded() {
  return game.isComplete() && !game.isAllowExtraBowl();
}
