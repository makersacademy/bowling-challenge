'use strict';

function randomInt (remainder) {
  var max = Math.round(remainder);
  return Math.round(Math.random() * (max));
};

function roll (remainder) {
  return randomInt(remainder);
};
