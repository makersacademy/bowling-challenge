const ScoreCard = require('../src/ScoreCard')

describe('ScoreCard', () => {
  let scoreCard = null

  beforeEach(() => {
    scoreCard = new ScoreCard()
  })

  it('can instruct to log a frame', () => {
    expect(scoreCard.logFrame).toBeDefined()
  })

  it('logs the frame', () => {
    const frame = jasmine.createSpyObj('frame', { outcome: [1, 1] })
    scoreCard.logFrame(frame)
    expect(scoreCard._frames).toContain(frame)
  })

  it('has a default score of 0', () => {
    expect(scoreCard.score()).toEqual(0)
  })

  it('can calculate score', () => {
    const frame = jasmine.createSpyObj('frame', { outcome: [1, 1] })
    scoreCard.logFrame(frame)
    expect(scoreCard.score()).toEqual(2)
  })
})
