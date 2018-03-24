'use strict';

function Round(numberOfPins) {
  if (numberOfPins > 10) {
    throw new Error("Max number of pins exceeded");
  } else {
    this._score = numberOfPins;
  };
};
