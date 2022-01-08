const Game = require('../lib/game')

describe('Game class', () => {
  beforeEach(() => {
    game = new Game()
  })

  it('create an instance of Game', () => {
    expect(game).toBeInstanceOf(Game)
  })

  it('initialize with an empty array', () => {
    expect(game.frames).toEqual([])
  })

  describe('addRolls', () => {
    it('add the rolls to the frames array', () => {
      game.addRolls(1, 4)
      expect(game.frames).toEqual([[1, 4]])
    })
  })

  describe('maxTen', () => {
    it('log sum of rolls is over 10', () => {
      expect(game.maxTen(6, 5)).toEqual('Sum of the rolls cannot exceed 10')
    })
  })
})
