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
    const frame = jasmine.createSpy('frame')
    scoreCard.logFrame(frame)
    expect(scoreCard._frames).toContain(frame)
  })
})
