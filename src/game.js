'use strict';

function Game() {
  this.rolls = [];
  this.currentRoll = 0;

};

Game.prototype.roll = function(pins) {
  this.rolls[this.currentRoll++] = pins;
  if (pins > 10) throw new Error('You cannot knock down more than 10 pins');

};

// Game.prototype.getCount = function() {
//   return this.pinCount;
// };

// Game.prototype.count = function(pins) {
//   return this.pinCount += pins;
// };


Game.prototype.score = function() {

  var result = 0;
  var frameIdx = 0;
  var game = this;


  for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
        result += 10 + getStrikeScore();
        frameIdx++;
    } else if (isSpare()) {
        result += 10 + getSpareScore();
        frameIdx += 2;
    }
    else {
        result += getNormalScore();
        frameIdx += 2;
    }
    console.log(result)
  }


  return result;



  function isStrike(){
    return game.rolls[frameIdx] === 10;
  };

  function isSpare(){
    return game.rolls[frameIdx] + game.rolls[frameIdx + 1] === 10;
  };

  function getStrikeScore(){
    return game.rolls[frameIdx + 1] + game.rolls[frameIdx + 2];
  };

  function getSpareScore(){
    return game.rolls[frameIdx + 2];
  };

  function getNormalScore(){
    return game.rolls[frameIdx] + game.rolls[frameIdx + 1];
  };

};

var rollMany = function(rolls, pins) {
  for (var i = 0; i < rolls; i++){
    game.roll(pins);
  }
};

let game = new Game();
console.log(game)
console.log(rollMany(20, 5))
console.log(game.roll(10))
console.log(game)
console.log(game.score())
