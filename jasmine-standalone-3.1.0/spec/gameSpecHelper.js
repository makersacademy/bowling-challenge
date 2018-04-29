'use strict';

function GameSpecHelper() {}

GameSpecHelper.prototype.pushFramesToTheGame = function(game, n) {
  var i;
  for (i = 0; i < n; i++) {
    var frame = new Frame(i + 1);
    game.frames.push(frame);
  }
  return game.frames;
};
