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

    it('does not add the rolls and throws error Sum of the rolls cannot exceed 10', () => {
      expect(() => game.addRolls(5,6)).toThrow('Sum of the rolls cannot exceed 10')
      expect(game.frames).toEqual([])
    })

    it('add a frame with a bonus roll if it is the last frame and a spare is scored', () => {
      for (let i=0; i < 9; i++) {
        game.addRolls(4,2)
      }
      game.addRolls(2, 8, 6)
      expect(game.frames.at(-1)).toEqual([2, 8, 6])
    })

    it('add a frame with a bonus roll if it is the last frame and a strike is scored', () => {
      for (let i=0; i < 9; i++) {
        game.addRolls(4,2)
      }
      game.addRolls(10, 10, 10)
      expect(game.frames.at(-1)).toEqual([10, 10, 10])
    })

    it('does not add a frame with a bonus roll if no spare or strike', () => {
      for (let i=0; i < 9; i++) {
        game.addRolls(4,2)
      }
      game.addRolls(3, 2, 5)
      expect(game.frames.at(-1)).not.toEqual([3, 2, 5])
    })
  })

  describe('isSpare', () => {
    it('should return true', () => {
      expect(game.isSpare(6,4)).toEqual(true)
    })
    it('should return false', () => {
      expect(game.isSpare(3,1)).toEqual(false)
    })
  })

  describe('isStrike', () => {
    it('should return true', () => {
      expect(game.isStrike(10,0)).toEqual(true)
    })
    it('should return false', () => {
      expect(game.isStrike(5,5)).toEqual(false)
    })
  })
})
