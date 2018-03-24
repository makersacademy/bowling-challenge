'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var res = 0;
  var rollIdx = 0;
  var game = this;

  for (var frameIdx = 0; frameIdx < 10; frameIdx++) {
    if (isSpare( )) {
      res += getSpareScore();
    } else {
      res += getNormalScore();
    }
    rollIdx += 2;
  }
  return res;

  function isSpare(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] === 10;
  };

  function getSpareScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] + game.rolls[rollIdx + 2];
  };

  function getNormalScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1];
  };
};
