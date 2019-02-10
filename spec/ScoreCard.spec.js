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
    const frame = jasmine.createSpyObj('frame', {
      outcome: [1, 1],
      type: 'open'
    })
    scoreCard.logFrame(frame)
    expect(scoreCard._currentFrame).toEqual(frame)
  })

  it('has a default score of 0', () => {
    expect(scoreCard.score()).toEqual(0)
  })

  it('can calculate score', () => {
    const frame = jasmine.createSpyObj('frame', {
      outcome: [1, 1],
      type: 'open'
    })
    scoreCard.logFrame(frame)
    expect(scoreCard.score()).toEqual(2)
  })

  it('can calculate score', () => {
    const frame = jasmine.createSpyObj('frame', {
      outcome: [1, 1],
      type: 'open'
    })

    scoreCard.logFrame(frame)
    expect(scoreCard.score()).toEqual(2)
  })

  it('calculates score correctly when last frame has a spare', () => {
    const frame1 = jasmine.createSpyObj('frame', {
      outcome: [5, 5],
      type: 'spare'
    })
    const frame2 = jasmine.createSpyObj('frame', {
      outcome: [3, 3],
      type: 'open'
    })

    scoreCard.logFrame(frame1)
    scoreCard.logFrame(frame2)

    expect(scoreCard.score()).toEqual(19)
  })

  it('calculates score correctly when last frame has a strike', () => {
    const frame1 = jasmine.createSpyObj('frame', {
      outcome: [10],
      type: 'strike'
    })
    const frame2 = jasmine.createSpyObj('frame', {
      outcome: [3, 3],
      type: 'spare'
    })

    scoreCard.logFrame(frame1)
    scoreCard.logFrame(frame2)

    expect(scoreCard.score()).toEqual(22)
  })

  it('calculates score correctly with strikes, spares, and opens', () => {
    const frame1 = jasmine.createSpyObj('frame', {
      outcome: [10],
      type: 'strike'
    })
    const frame2 = jasmine.createSpyObj('frame', {
      outcome: [3, 3],
      type: 'open'
    })
    const frame3 = jasmine.createSpyObj('frame', {
      outcome: [3, 3],
      type: 'open'
    })
    const frame4 = jasmine.createSpyObj('frame', {
      outcome: [3, 7],
      type: 'spare'
    })
    const frame5 = jasmine.createSpyObj('frame', {
      outcome: [3, 4],
      type: 'open'
    })

    scoreCard.logFrame(frame1)
    scoreCard.logFrame(frame2)
    scoreCard.logFrame(frame3)
    scoreCard.logFrame(frame4)
    scoreCard.logFrame(frame5)

    expect(scoreCard.score()).toEqual(48)
  })
})
