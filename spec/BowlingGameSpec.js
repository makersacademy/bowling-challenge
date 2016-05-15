'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('initializes with a scoreboard', function() {
    expect(game.getScoreboard()).not.toEqual(null);
  });

  it('initializes with a new roll', function () {
    expect(game.getCurrentRoll()).not.toEqual(null);
  });

  it('allows a player to roll first ball of a frame', function () {
    game.playFirstRoll();
    var board = game.getScoreboard();
    expect(board.frames.length).toEqual(1);
  });

  it('allows a player to roll second ball of a frame', function () {
    game.playFirstRoll();
    game.playSecondRoll();
    var board = game.getScoreboard();
    expect(board.getCurrentScore()).toBeGreaterThan(-1);
  });

});
