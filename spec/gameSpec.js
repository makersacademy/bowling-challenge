"use strict";

describe("Game", () => {
  let frame;
  let game;

  beforeEach(() => {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['addRoll', 'getScore', 'isStrike', 'isSpare']);
  });
  
  it("allow to add rolls to the frame", () => {
    game.addRoll(5);
    game.addRoll(2);
    expect(game.frames).toEqual([5, 2]);
  });
});
