"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has a default total score of 0", function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  it("has an empty defaul frame sheet", function() {
    expect(game.getFrameSheet()).toEqual([]);
  });

  it("keeps track of the current roll number", function() {
    expect(game.getCurrentRollNumber()).toEqual(1);
  });
});
