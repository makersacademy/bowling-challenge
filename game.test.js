const Game = require('./game');

describe('Game class', () => {
  it('game starts at zero', () => {
    const game = new Game()
    expect(game.getScore()).toBe(0)
  })

  it('rolls a 1', () => {
    const game = new Game()
    game.roll(1)
    expect(game.getScore()).toBe(1)
  })

  it('adds two scores together', () => {
    const game = new Game()
    game.roll(1)
    game.roll(1)
    expect(game.getScore()).toBe(2)
  })

  it('bowls a gutter game of 10 zeros', () => {
    const game = new Game()
    for (let i = 0 ; i < 10 ; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toBe(0)
  })


})