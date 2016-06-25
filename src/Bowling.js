function Bowling() {
  'use strict';
  this._score = 0;
  this._currentTurn = 0;
  this._turns = [];
}

Bowling.prototype = {
  
  getScore: function() {
    return this._score;
  },
}
