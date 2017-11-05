'use strict';

/// create framers from game class
/// create a frame class to store frame calss stuff as  data in frame(rolls, strike/spare)

function Game() {
  this._player = 'Ollie';
  this._totalScore = 0;
};

// Game.prototype.getTotalScore = function() {
//   return this._totalScore;
// };

Game.prototype.getPlayerName = function() {
  return this._player;
};
