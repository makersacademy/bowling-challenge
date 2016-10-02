'use strict';

function Frame() {

  this.DEFAULT_FRAME_SCORE = 0;
  this.frameScore = this.DEFAULT_FRAME_SCORE;
  this.DEFAULT_ROLL_SCORE = 0;
  this.rollScore = this.DEFAULT_ROLL_SCORE;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.DEFAULT_ROLLS_ALLOWED = 2;
  this.rolls = [];
  this.rollCounter = this.rolls.length;
  this.strikeBonus = false;
  this.spareBonus = false;
  this.bonusScore = 0;
};

  Frame.prototype.getPinCount = function() {
    return this.pinCount;
  };

  Frame.prototype.getRolls = function() {
      return this.rolls;
  };

  Frame.prototype.isFirstRoll = function() {
    if (this.rollCounter === 1) {
      return true;
    };
  };

  Frame.prototype.isSecondRoll = function() {
    if (this.rollCounter === 2) {
      return true;
    };
  };

  Frame.prototype.isStrike = function() {
    if ((this.isFirstRoll() === true) && (this.pinCount === 0)) {
      return true;
    };
  };

  Frame.prototype.isSpare = function() {
    if ((this.isSecondRoll() === true) && (this.pinCount === 0)) {
      return true;
    };
  };

  Frame.prototype.isComplete = function() {
    if (this.rollCounter === 2) {
      return true;
    };
  };

  Frame.prototype.roll = function(numberOfPins) {
    this.rollScore = numberOfPins;
    this.pinCount -= numberOfPins;
    this.addRollScore();
    this.whatNextRoll();
  };

  Frame.prototype.addRollScore = function() {
    this.rolls.push(this.rollScore);
    this.updateRollCounter();
  };

  Frame.prototype.updateRollCounter = function() {
    this.rollCounter = this.rolls.length;
    return this.rollCounter;
  };

  Frame.prototype.whatNextRoll = function() {
    if (this.isStrike() === true || this.isSpare() === true) {
      this.ifStrike();
      this.ifSpare();
    } else {
      this.resetIfComplete();
    };
  };

  Frame.prototype.ifStrike = function() {
    if (this.isStrike()) {
      this.rolls.push(0);
      this.updateRollCounter();
      this.strikeBonus = true;
      this.resetIfComplete();
    };
  };

  Frame.prototype.ifSpare = function() {
    if (this.isSpare()) {
      this.spareBonus = true;
      this.resetIfComplete();
    };
  };

  Frame.prototype.resetIfComplete = function() {
    if (this.isComplete() === true) {
       this.addFrameToGame(game);
       this.resetRolls();
       this.resetFrame();
       this.resetPinCount();
     };
  };

  Frame.prototype.addFrameToGame = function(game) {
    this.getFrameScore();
    game.addFrame(this);
  };

  Frame.prototype.getFrameScore = function() {
   var total = this.rolls.reduce(add, 0);
     function add(a, b) {
       return a + b;
     }
   this.frameScore = total + this.bonusScore;
   return this.frameScore;
  };

  Frame.prototype.resetRolls = function() {
   this.rolls = []
   this.updateRollCounter();
  };

  Frame.prototype.resetFrame = function() {
   this.frameScore = this.DEFAULT_FRAME_SCORE;
  };

  Frame.prototype.resetPinCount = function() {
   this.pinCount = this.DEFAULT_PIN_COUNT;
  };
