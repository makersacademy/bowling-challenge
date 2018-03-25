'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

// Game.prototype.getCount = function() {
//   return this.pinCount;
// };

// Game.prototype.count = function(pins) {
//   return this.pinCount += pins;
// };


Game.prototype.score = function() {

  var result = 0;
  var rollIdx = 0;
  var game = this;

  for (var frameIdx = 0; frameIdx < 10; frameIdx++) {
    if (isStrike()) {
        result += getStrikeScore();
        rollIdx++;
    } else if (isSpare()) {
        result += getSpareScore();
        rollIdx += 2;
    } else {
        result += getNormalScore();
        rollIdx += 2;
    };
  };
  return result;

  function isStrike(){
    return game.rolls[rollIdx] === 10;
  };

  function isSpare(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] === 10;
  };

  function getStrikeScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] + game.rolls[rollIdx + 2];
  };

  function getSpareScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1] + game.rolls[rollIdx + 2];
  };

  function getNormalScore(){
    return game.rolls[rollIdx] + game.rolls[rollIdx + 1];
  };
};
