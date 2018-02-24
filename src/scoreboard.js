var Scoreboard = function() {};

Scoreboard.prototype.score = function(frame) {
  return frame.total();
};
