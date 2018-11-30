'use strict';

  function Game() {
    this.DEFAULT_FRAMES = 10;
    this.game = this.DEFAULT_FRAMES;
  };

  Game.prototype.start = function () {
    return this.game;
  };
