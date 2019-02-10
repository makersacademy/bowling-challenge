const ScoreCard = require('../src/ScoreCard')

describe('ScoreCard', () => {
  let scoreCard = null

  beforeEach(() => {
    scoreCard = new ScoreCard()
  })

  it('can instruct to log a frame', () => {
    expect(scoreCard.logFrame).toBeDefined()
  })

})
