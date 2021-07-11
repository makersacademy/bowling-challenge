'use strict';

describe("Game", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  });

  it("can score a gutter game", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    
    expect(game.final_score()).toEqual(0);
  });

  it("can score a game of all 1s", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    
    expect(game.final_score()).toEqual(20);
  });
});