'use strict';

function Pins(){}

Pins.prototype.knockPins = function(){
  return Math.floor(Math.random() * 11);
}
