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
      const gameDouble = { frames: [[1, 4]] }
      const score = new Score(gameDouble)
      expect(score.addToTotal()).toEqual(5)
    })
  })
})