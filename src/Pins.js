'use strict';

function Pins(){}

Pins.prototype.knockPin = function(max=10){
  return Math.floor(Math.random() * (max+1));
}
