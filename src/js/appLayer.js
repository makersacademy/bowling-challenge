'use strict';

var game = new Game();

$('#current-frame').text(game.currentFrame());

$('#current-score').text(game.score());

for (var i = 1; i <= game.pinsRemaining(); i++) {
  $('#pin-selection').append('<button value="'+i+'">'+i+'</button>')
};
