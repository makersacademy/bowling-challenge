'use strict';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('hits a strike', () => {
    game.hit(10)
    expect(game.score).toEqual(10)
  });

  it('hits a gutter game', () => {
    for (let i = 0; i < 20; i++) {
      game.hit(0);
    }
    expect(game.score).toEqual(0)
  });

  it('hits a spare', () => {
    game.hit(5)
    game.hit(5)
    for (let i = 0; i < 18; i++) {
      game.hit(0);
    }
    expect(game.score).toEqual(10)
  });

  it('returns total score', () => {
    for (let i = 0; i < 20; i++){
    game.hit(1)
    }
    expect(game.totalScore()).toEqual(20)
  });

  it('returns number of rolls', () => {
    game.hit(4)
    game.hit(5)
    expect(game.rolls).toEqual(2)
  });

  it('resets rolls after strike', () => {
    game.hit(10)
    expect(game.rollsReset).toEqual(0)
  })
  
});
