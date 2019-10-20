'use strict';

describe ('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts at 0 points', function() {
    expect(game.score).toEqual(0);
  });




});
