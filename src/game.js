'use strict';

function Game() {
  this.rolls = [];
  this.result = 0;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var rollIdx = 0;
  var game = this;

  for (var frameIdx = 0; frameIdx < 10; frameIdx++) {
    if (isStrike()) {
        game.result += getStrikeAndSpareScore();
        rollIdx++;
    } else if (isSpare()) {
        game.result += getStrikeAndSpareScore();
      rollIdx += 2;
    } else {
        game.result += getNormalScore();
      rollIdx += 2;
    };
  };
  return game.result;

  function isStrike(){
    return game.rolls[rollIdx] == 10;
  };

  function isSpare(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] === 10;
  };

  function getStrikeAndSpareScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] + game.rolls[rollIdx + 2];
  };

  function getNormalScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1];
  };
};
