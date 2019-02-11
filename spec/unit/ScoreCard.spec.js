const ScoreCard = require('../../src/ScoreCard')
const Frame = require('../../src/Frame')

describe('ScoreCard', () => {
  let scoreCard = null

  const frameStrike = jasmine.createSpyObj('frameStrike', {
    outcome: [10],
    type: 'strike'
  })

  const frameSpare = jasmine.createSpyObj('frameSpare', {
    outcome: [5, 5],
    type: 'spare'
  })

  const frameOpen = jasmine.createSpyObj('frameOpen', {
    outcome: [3, 3],
    type: 'open'
  })

  beforeEach(() => {
    scoreCard = new ScoreCard()
  })

  it('can instruct to log a frame', () => {
    expect(scoreCard.logFrame).toBeDefined()
  })

  it('has a default score of 0', () => {
    expect(scoreCard.score()).toEqual(0)
  })

  it('can calculate score', () => {
    spyOn(Frame, 'new').and.returnValue(frameOpen)
    scoreCard.logFrame([3, 3])

    expect(scoreCard.score()).toEqual(6)
  })

  it('calculates score correctly when last frame has a spare', () => {
    spyOn(Frame, 'new').and.returnValues(frameSpare, frameOpen)

    scoreCard.logFrame([5, 5])
    scoreCard.logFrame([3, 3])

    expect(scoreCard.score()).toEqual(19)
  })

  it('calculates score correctly when last frame has a strike', () => {
    spyOn(Frame, 'new').and.returnValues(frameStrike, frameOpen)

    scoreCard.logFrame([10])
    scoreCard.logFrame([3, 3])

    expect(scoreCard.score()).toEqual(22)
  })

  it('calculates score correctly with strikes, spares, and opens', () => {
    spyOn(Frame, 'new').and.returnValues(
      frameStrike,
      frameOpen,
      frameSpare,
      frameOpen
    )

    scoreCard.logFrame([10])
    scoreCard.logFrame([3, 3])
    scoreCard.logFrame([5, 5])
    scoreCard.logFrame([3, 3])

    expect(scoreCard.score()).toEqual(41)
  })
})
