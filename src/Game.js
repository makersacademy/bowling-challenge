'use strict';

function Game(){

  this.DEFAULT_GAME_SCORE = 0;
  this.GameScore = this.DEFAULT_GAME_SCORE;
  this.MAX_FRAMES = 10;
  this.frames = [];
  this.spareBonus = false;
  this.strikeBonus = false;
};

Game.prototype.getGameScore = function() {
  var total = this.frames.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
  this.GameScore = total;
  return this.GameScore;
};

Game.prototype.getFrameCounter = function() {
  this.frameCounter = this.frames.length;
  return this.frameCounter;
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame.frameScore);
  if (frame.isStrike() === true) {
    this.strikeBonus = true;
  } else {
      if (frame.isSpare() === true) {
        this.spareBonus = true;
      };
    };
};

Game.prototype.addSpareBonus = function(frame) {
  var previous;
  previous = this.getFrameCounter() - 1;
  this.frames[previous] += frame.getBonusScore();
};
