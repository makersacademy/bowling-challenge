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
    
    it('does not add the rolls and logs Sum of the rolls cannot exceed 10', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      game.addRolls(5,6)
      expect(consoleSpy).toHaveBeenCalledWith('Sum of the rolls cannot exceed 10')
      expect(game.frames).toEqual([])
    })
  })
})
