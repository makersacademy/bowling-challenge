'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can record frames played", function() {
    expect(game.frames).toEqual([])
  });




});
