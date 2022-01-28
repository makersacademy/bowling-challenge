const Scorecard = require('./Scorecard');

describe('Scorecard', () => {
  it('handles a gutter game', () => {
    const gutterGame = new Scorecard([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    expect(gutterGame.getScore()).toEqual(0);
  })

  it('can roll a game with no spares or strikes', () => {
    const boringGame = new Scorecard([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])

    expect(boringGame.getScore()).toEqual(60);
  })

  it('can roll a game with spares', () => {
    const spareGame = new Scorecard([5, 5, 6, 1, 0, 0, 0, 0, 0, 0])

    expect(boringGame.getScore()).toEqual(23);
  })
})