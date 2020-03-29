'use strict';

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game;
  })

  let multipleRolls = function(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it ('can have a gutter game', () => {
    multipleRolls(0, 20);
    expect(game.score()).toBe(0);
  })

  it ('can roll all ones', () => {
    multipleRolls(1, 20);
    expect(game.score()).toBe(20);
  })

})
