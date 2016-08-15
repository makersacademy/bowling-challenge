'use strict';

function Game(){

  this.DEFAULT_GAME_SCORE = 0;
  this.GameScore = this.DEFAULT_GAME_SCORE;
  this.MAX_FRAMES = 10;
  this.frames = [];
  this.spareBonus = false;
  this.strikeBonus = false;
};

Game.prototype.getFrameCounter = function() {
  this.frameCounter = this.frames.length;
  return this.frameCounter;
};

Game.prototype.getSpareBonus = function() {
  return this.spareBonus;
};

Game.prototype.getGameScore = function() {
  var total = this.frames.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
  this.GameScore = total;
  return this.GameScore;
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame.getRolls());
  if (frame.isStrike() === true) {
    this.strikeBonus = true;
  } else {
      if (frame.isSpare() === true) {
        this.spareBonus = true;
      };
    };
};

Game.prototype.addBonusPrevious = function(frame) {
  var previous;
  // if (this.strikeBonus === true) {
  //   previous = this.getFrameCounter() - 2;
  // } else {
    previous = this.getFrameCounter() - 1;
  // };
  this.frames[previous] += frame.getBonusScore();
};

// Game.prototype.start = function() {
//   var frame1;
//   frame1 = new Frame;
// };
