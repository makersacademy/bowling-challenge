"use strict";

describe("Feature Test", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("bowls the Makers Example game", () => {
    game.bowl(1);
    game.bowl(4);
    game.bowl(4);
    game.bowl(5);
    game.bowl(6);
    game.bowl(4);
    game.bowl(5);
    game.bowl(5);
    game.bowl(10);
    game.bowl(0);
    game.bowl(1);
    game.bowl(7);
    game.bowl(3);
    game.bowl(6);
    game.bowl(4);
    game.bowl(10);
    game.bowl(2);
    game.bowl(8);
    game.bowl(6);
    game.scorecard();
  });
});
