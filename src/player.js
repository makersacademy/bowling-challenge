'use strict';

var Player = function(name) {
  this._name = name;
};

Player.prototype.getName = function() {
  return this._name;
};
