'use strict';

describe('BowlingGame', function() {
  var game;
  var _currentRoll;

  beforeEach(function() {
    game = new BowlingGame();
    _currentRoll = {
      getHitsFromRoll: function() {
        return value;
      },
    };
    spyOn(game._currentRoll, 'getHitsFromRoll').and.returnValue(4);
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
    expect(board.calculator.getCurrentScore()).toBeGreaterThan(-1);
  });

});
