'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  // this is a feature spec

  it("gutter game score is zero", function() {
    for (var i = 1; i <= 10; i++) {
    game.recordFrame(0);
    }
    expect(game.finalScore()).toEqual(0);
  });

  it("1 point per frame equals 10", function() {
    for (var i = 1; i <= 10; i++) {
    game.recordFrame(1);
    }
    expect(game.finalScore()).toEqual(10);
  });



});
