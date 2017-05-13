"use strict";

function Game() {
  this._total = 0;
}

Game.prototype = {

  roll: function() {
  },

  score: function() {
    for(var i = 0; i < 20; i++) {
      this._total += this.roll();
    }
    return this._total;
  }

};
