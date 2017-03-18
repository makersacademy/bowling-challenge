'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("has 10 frames to begin", function() {
    expect(game._frames).toEqual(10);
  });
});
