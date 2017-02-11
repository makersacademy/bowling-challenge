"use strict";

describe("Game", function(){
  var game;
});

  beforeEach(function() {
    game = new Game();
  });

  it("returns current frame", function(){
    expect(game.getFrame()).toEqual([]);
  });
  it("returns current roll", function(){
    expect(game.getRoll()).toEqual(0);
  });
