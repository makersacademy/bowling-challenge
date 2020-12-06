'use strict';

describe('bowling', () => {
  let game
  beforeEach( () => {
    game = new BowlingGame();
  });

  it('can roll a gutter game', () => {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can roll a game of ones', () => {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(4);
    for (var i = 0; i < 17; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(18);
  });

  it('can roll a strike', () => {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    for (var i = 0; i < 16; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(24);
  });

  it('can roll two strikes in a row', () => {
    game.roll(10);
    game.roll(10);
    game.roll(5);
    for (var i = 0; i < 17; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(45);
  });


  it('can roll a perfect game', () => {
    for (var i = 0; i < 12; i++){
      game.roll(10);
    }
    expect(game.score()).toEqual(300);
  });

  it('can roll a game of all spares', () => {
    for (var i = 0; i < 21; i++){
      game.roll(5);
    }
    expect(game.score()).toEqual(150);
  });
});
