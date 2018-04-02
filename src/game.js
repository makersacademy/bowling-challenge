'use strict';

function Game() {
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins) {


  if (this.isOver()){
    return 'The game is over.';
  } else {
    this.rolls[this.currentRoll++] = pins

  }
  // this.rolls[this.currentRoll++] = pins;
  if (pins > 10) {
    throw new Error('You cannot knock down more than 10 pins');
  }


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
  var boxCount = 0;


  for (var frame = 0; frame < 10; frame++) {

    if (isStrike()) {
        result += 10 + getStrikeScore();
        frameIdx++;
        boxCount += 2
    } else if (isSpare()) {
        result += 10 + getSpareScore();
        frameIdx += 2;
        boxCount += 2
    }
    else {
      if (isCheating()) {
        throw new Error("Trying to cheat huh? There aren't that many pins left.");
        boxCount += 2
      } else {
        result += getNormalScore();
        frameIdx += 2;
        boxCount += 2
      }
    }
  }

  return result;

  function isCheating(){
    return game.rolls[boxCount] + game.rolls[boxCount + 1] > 10
  }

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

Game.prototype.isOver = function(){
  if (this.rolls.length === 21) {
    return true
  } else if (this.rolls.length === 20) {
    if (this.rolls.slice(-1)[0] === 10 || this.rolls.slice(-1)[0] + this.rolls.slice(-2)[0] === 10) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
};

var rollMany = function(rolls, pins) {
  for (var i = 0; i < rolls; i++){
    game.roll(pins);
  }
};

let game = new Game();
// console.log(game)
// console.log(rollMany(20, 4))
// console.log(game.roll(10))
// console.log(game)
// console.log(game.score())
// console.log(game.isOver())
// console.log(game.currentRoll)
