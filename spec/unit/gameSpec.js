'use strict';

describe("Game", function() {
  var game;
  var song;

  beforeEach(function() {
    game = new Game();
  });

  it("should start with zero score", function() {
    expect(game.score).toEqual(0);
  });

});
