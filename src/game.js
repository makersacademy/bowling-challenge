'use strict';

function Game() {
  this.score = [];
};

Game.prototype = {

  roll: function(pins) {
    this.score.push(pins)
    }

};
