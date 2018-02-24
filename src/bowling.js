var Bowling = function() {};

Bowling.prototype.firstRoll = function() {
  return Math.floor(Math.random() * 10) + 1;
};
