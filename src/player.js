(function () {
   'use strict';
}());

function Player(){}

Player.prototype.roll = function(number){
  return Math.floor(Math.random() * (number + 1));
};
