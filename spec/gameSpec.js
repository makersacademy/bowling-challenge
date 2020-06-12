'use strict';

let Game = require('../src/Game.js');

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game;
  })

// function to create multiple rolls
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

  it ('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    multipleRolls(0, 17);
    expect(game.score()).toBe(16);
  })

  it ('can get a strike', () => {
    game.roll(10);
    game.roll(5);
    multipleRolls(0, 17);
    expect(game.score()).toBe(20);
  })

  it ('can get a perfect game', () => {
    multipleRolls(10, 12);
    expect(game.score()).toBe (300);
  })

  it ('cannot exceed the maximum number of rolls', () => {
    multipleRolls(10, 13);
    expect(game.score()).toBe (300);
    expect(game._gameover).toBe (true);
  })
})
