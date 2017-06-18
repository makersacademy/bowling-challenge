'use strict';

var Roll = function () {

};

Roll.prototype.makeRoll = function(pins) {
  if (pins < 0) {
    throw new Error("Can not knock down a negative number of pins")
  } else if (pins > 10) {
    throw new Error("Can not knock down more than 10 pins")
  } else {
    return pins
  };
};
