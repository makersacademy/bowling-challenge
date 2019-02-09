'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("gutter game score is zero", function() {
    expect(game.finalScore()).toEqual(0);
  });

});
