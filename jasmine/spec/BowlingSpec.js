"use strict";

describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("can get index for the latest roll score", function () {
    for (var i = 0; i < 3; i++) { game.bowl(3) }
    expect(game.getIndex()).toEqual(2);
  });

  it("can record score for each roll", function () {
    game.bowl(8);
    expect(game._rollScore).toEqual([8]);
  });

  it("can record score for each frame", function () {
    game.bowl(8);
    game.bowl(1);
    game.calFrameScore();
    expect(game._frameScore).toEqual([9]);
  });

  it("can check remaining pins for each frame", function () {
    game.bowl(2);
    expect(game._pins).toEqual(8);
  });

  it("knows a strike", function () {
    game.bowl(10);
    expect(game.isStrike()).toBe(true);
  });

  it("knows a spare", function () {
    game.bowl(8);
    game.bowl(2);
    expect(game.isSpare()).toBe(true);
  });

  it("allow 10 pins for each frame", function () {
    game.bowl(3);
    expect(function () { game.bowl(8);}).toThrow("You can't hit more than 10 pins in each frame");
  });

  it("resets pins after every frame", function () {
    game.bowl(2);
    game.bowl(1);
    expect(game._pins).toEqual(10);
  });



});
