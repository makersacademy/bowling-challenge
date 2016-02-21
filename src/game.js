function Game(frameKlass) {
  'use strict';

  this._frames = (function () {
    var array = [];
    for (var i = 0; i < 10; i++) {
      array.push(new frameKlass());
    }
    return array;
  })(frameKlass);

  console.log(this._frames);
}

Game.prototype.roll = function () {
  // TODO: add #currentTurn implementation
  this._frames[0].roll();
};

// TODO: #currentTurn

// TODO: #logFrame
