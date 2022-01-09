const Score = require('../lib/score')

describe('Score class', () => {
  beforeEach(() => {
    score = new Score()
  })

  it('create an instance of Score', () => {
    expect(score).toBeInstanceOf(Score)
  })

  it('initialize with a total of 0', () => {
    expect(score.total).toEqual(0)
  })

  describe('addToTotal', () => {
    it('sums the latest frame added', () => {
      const gameDouble = { frames: [[1, 4]], isSpare: () => false, isStrike: () => false }
      const score = new Score(gameDouble)
      expect(score.addToTotal()).toEqual(5)
      expect(score.total).toEqual(5)
    })
  })

  describe('addBonus', () => {
    it('returns a bonus if a spare is scored', () => {
      const gameDouble = { frames: [[6, 4], [4, 1]], isSpare: () => true }
      const score = new Score(gameDouble)
      expect(score.addBonus([4, 1])).toEqual(4)
    })

    it('returns a bonus if a strike is scored', () => {
      const gameDouble = { frames: [[10, 0], [5, 3]], isSpare: () => false, isStrike: () => true }
      const score = new Score(gameDouble)
      expect(score.addBonus([5, 3])).toEqual(8)
    })
  })
})