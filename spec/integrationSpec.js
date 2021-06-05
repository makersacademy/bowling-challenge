const Game = require('../lib/game')
const bowlSequence = require('./helpers/bowlSequence')

describe('Integration', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  describe('when the player bowls a perfect game', () => {
    it('totalScore is 300', () => {
      for (let i = 0; i < 12; i++) {
        game.bowl(10)
      }

      expect(game.totalScore).toBe(300)
    })
  })

  describe('when the player bowls a gutter game', () => {
    it('totalScore is 0', () => {
      for (let i = 0; i < 20; i++) {
        game.bowl(0)
      }

      expect(game.totalScore).toBe(0)
    })
  })

  describe('when no strike or spare', () => {
    it('when given 4 total score is 4', () => {
      expect(game.bowl(4)).toBe(4)
    })

    it('when given 4 then 2 total score is 6', () => {
      game.bowl(4)

      expect(game.bowl(2)).toBe(6)
    })
  })

  describe('when strike', () => {
    it('when give 10 total score is 10', () => {
      expect(game.bowl(10)).toBe(10)
    })

    it('when given 10 then 3 total score is 16', () => {
      game.bowl(10)

      expect(game.bowl(3)).toBe(16)
    })

    it('when given 10 then 3 then 6 total score is 28', () => {
      game.bowl(10)
      game.bowl(3)

      expect(game.bowl(6)).toBe(28)
    })

    it('when given 10 then 3 then 6 then 4 total score is 32', () => {
      game.bowl(10)
      game.bowl(3)
      game.bowl(6)

      expect(game.bowl(4)).toBe(32)
    })

    it('when three strikes in a row total score is 60', () => {
      game.bowl(10)
      game.bowl(10)

      expect(game.bowl(10)).toBe(60)
    })
  })

  describe('when spare', () => {
    it('when given 7 total score is 7', () => {
      expect(game.bowl(7)).toBe(7)
    })

    it('when given 7 then 3 total score is 10', () => {
      game.bowl(7)

      expect(game.bowl(3)).toBe(10)
    })

    it('when given 7 then 3 then 4 total score is 18', () => {
      game.bowl(7)
      game.bowl(3)

      expect(game.bowl(4)).toBe(18)
    })

    it('when given 7 then 3 then 4 then 2 total score is 20', () => {
      game.bowl(7)
      game.bowl(3)
      game.bowl(4)

      expect(game.bowl(2)).toBe(20)
    })
  })

  describe('in the last frame', () => {
    it('when no strike or spare get no bonus rolls', () => {
      const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10]
      bowlSequence(game, rolls)

      expect(game.bowl(2)).toBe(111)
      expect(game.bowl(4)).toBe(119)
      expect(game.bowl(5)).toBe(119)
    })

    it('when spare get one bonus roll', () => {
      const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10]
      bowlSequence(game, rolls)

      expect(game.bowl(2)).toBe(111)
      expect(game.bowl(8)).toBe(127)
      expect(game.bowl(6)).toBe(133)
      expect(game.bowl(6)).toBe(133)
    })

    it('when strike get two bonus rolls', () => {
      const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10]
      bowlSequence(game, rolls)

      expect(game.bowl(10)).toBe(127)
      expect(game.bowl(8)).toBe(143)
      expect(game.bowl(2)).toBe(145)
      expect(game.bowl(7)).toBe(145)
    })
  })
})
