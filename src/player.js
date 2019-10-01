'use strict';

function Player(name){
  this._name = name;
};

Player.prototype.getName = function(){
  return this._name;
};