const BowlingScore = require('./bowlingScore')

describe('BowlingScore', () => {
  it ('returns the accumulated score without any strikes or spares', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5)
    scorecard.addFrame(3, 5)
    expect(scorecard.calculateScore()).toEqual(15)
  })

  it ('returns the accumulated score with a strike', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    expect(scorecard.calculateScore()).toEqual(33)
  })

  it ('returns the accumulated score with two strikes', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    expect(scorecard.calculateScore()).toEqual(59)
  })

  it ('returns the accumulated score with two strikes and a strike at the end', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    scorecard.addFrame('X')
    expect(scorecard.calculateScore()).toEqual(59)
  })

  it ('returns the accumulated score with two strikes and a strike at the end', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    scorecard.addFrame('X')
    expect(scorecard.calculateScore()).toEqual(59)
  })

  it ('returns the accumulated score with a spare at the end', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5) // 7
    scorecard.addFrame(4, '/')
    expect(scorecard.calculateScore()).toEqual(7)
  })
  
  it ('returns the accumulated score with a spare', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5) // 7
    scorecard.addFrame(4, '/') // 4 + 6 + 3
    scorecard.addFrame(3, 5) // 8
    expect(scorecard.calculateScore()).toEqual(28)
  })

  it ('returns the accumulated score with two spares', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(2, 5) // 7
    scorecard.addFrame(4, '/') // 4 + 6 + 3
    scorecard.addFrame(3, 5) // 8
    scorecard.addFrame(4, '/') // 4 + 6 + 3
    scorecard.addFrame(3, 5) // 8
    expect(scorecard.calculateScore()).toEqual(49)
  })

  it ('returns the accumulated score with two spares', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    expect(scorecard.calculateScore()).toEqual(90)
  })
})