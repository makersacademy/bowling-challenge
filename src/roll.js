'use strict';

function Roll() {

}

Roll.prototype.takeFirstTurn = function (pins) {
  if (pins > 10) {
    throw new Error('Sorry please select from 0 to 10 pins!')
  }
  return pins
}

Roll.prototype.takeSecondTurn = function (pins, previousRoll) {
  if (pins + previousRoll > 10) {
    throw new Error('Sorry please select from ' + previousRoll + ' to 10 pins!')
  }
  return pins
}