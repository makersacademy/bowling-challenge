'use strict';

describe("game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("should initialise with 0/10 rounds bowled", function() {
    expect(game.roundNumber).toEqual(0);
  });
});
