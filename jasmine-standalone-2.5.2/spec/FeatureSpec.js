'use strict';

describe('Feature Test', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("should give a score of 0 for a gutter game", function() {
    for (var i=0; i<20; i++) {
      game.roll(0);
    }
    expect(game.calculateScore()).toEqual(0);
  })

  it("should calculate the score for a simple game with no strikes/spares", function() {
    for (var i=0; i<20; i++) {
      game.roll(1);
    }
    expect(game.calculateScore()).toEqual(20);
  })
});
