'use strict';

  function Game() {
    this.DEFAULT_FRAMES = 10;
    this.game = this.DEFAULT_FRAMES;
    this.DEFAULT_PINS = 10;
    this.pin_amount = this.DEFAULT_PINS
  };

  Game.prototype.start = function () {
    return this.game;
  };

  Game.prototype.roll = function() {
    var num = Math.floor(Math.random() * 10 + 1);
    this.pin_amount -= num;
    return this.pin_amount;
  }
