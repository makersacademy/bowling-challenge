'use strict';

describe('BowlingGame', function() {
  let game;
  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should return calculate a gutter game', function() {
    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });

  it('can score a game of ones', function() {
    for (let i = 0; i < 20; i++) {
      game.roll(1)
    }
    expect(game.score()).toEqual(20);
  });

  it('can score a spare followed by a 3', function() {
    game.roll(5)
    game.roll(5)
    game.roll(3)
    for (let i = 0; i < 17; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(16);
  })

  it('can score a strike followed by two 3s', function() {
    game.roll(10)
    game.roll(3)
    game.roll(3)
    for (let i = 0; i < 17; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(22);
  })

  it('can score a perfect game', function() {
    for (let i = 0; i < 12; i++) {
      game.roll(10)
    }
    expect(game.score()).toEqual(300)
  })

})