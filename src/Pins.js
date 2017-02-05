'use strict';

function Pins(){}

Pins.prototype.knockPin = function(max){
  return Math.floor(Math.random() * (max+1));
}
