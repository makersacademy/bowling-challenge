'use strict';

describe('BowlingGame', function() {
  var game;
  var currentRoll;

  beforeEach(function() {
    game = new BowlingGame();
    currentRoll = {
      getHitsFromRoll: function() {
        return value;
      },
    };
    spyOn(game.currentRoll, 'getHitsFromRoll').and.returnValue(4);
  });

  it('scoreboard initialised at start', function() {
    expect(game.getScoreboard()).not.toEqual(null);
  });

  it('ready to roll', function () {
    expect(game.getCurrentRoll()).not.toEqual(null);
  });

  it('first roll in frame', function () {
    game.playFirstRoll();
    var board = game.getScoreboard();
    expect(board.frames.length).toEqual(1);
  });

  it('second roll in frame', function () {
    game.playFirstRoll();
    game.playSecondRoll();
    var board = game.getScoreboard();
    expect(board.calculator.getCurrentScore()).toBeGreaterThan(-1);
  });

});
