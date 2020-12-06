'use strict';

describe('Game', () => {
  // var Game = require('../src/game.js');
  var game;

  beforeEach(() => {
    game = new Game();
  });

  it('creates an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  }); 
});