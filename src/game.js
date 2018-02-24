var Game = function() {};

Game.prototype.readScore = function(bowlingFrame) {
  return bowlingFrame.total();
};
