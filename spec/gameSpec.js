'use strict;'

describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });
  it ('scoreboard is initialized with an empty array', function() {
    expect(game.scoreboard).toEqual([]);
  });
  it ('totalScore is initialized with zero', function() {
    expect(game.totalScore).toEqual(0)
  });
  it ('pins is initialized with 10', function() {
    expect(game.pins).toEqual(10)
  });
  it ('frame is initialized with 1', function() {
    expect(game.frame).toEqual(1)
  });
  it ('roll is initialized with 1', function() {
    expect(game.roll).toEqual(1)
  });
  it ('pinsKnocked is initialized with 0', function() {
    expect(game.pinsKnocked).toEqual(0)
  });
});
