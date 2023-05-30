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

  it ('returns the accumulated score with 5 strikes in a row', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    expect(scorecard.calculateScore()).toEqual(90)
  })

  it ('returns the accumulated score with 5 strikes in a row then a regular turn', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame(3, 5)
    expect(scorecard.calculateScore()).toEqual(139)
  })

  it ('returns the accumulated score of a perfect game', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X')
    scorecard.addFrame('X', 'X', 'X')
    expect(scorecard.calculateScore()).toEqual(300)
  })

  it ('returns the accumulated score of a perfect game', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(5, 3)
    scorecard.addFrame(5, '/')
    scorecard.addFrame(7, 1)
    scorecard.addFrame(6, 2)
    scorecard.addFrame(8, '/')
    scorecard.addFrame(2, 3)
    scorecard.addFrame(7, 2)
    scorecard.addFrame('X')
    scorecard.addFrame(7, '/')
    scorecard.addFrame('X', 4, 3)
    expect(scorecard.calculateScore()).toEqual(124)
  })

  it ('returns the accumulated score of a perfect game', () => {
    let scorecard = new BowlingScore
    scorecard.addFrame(5, 3)
    scorecard.addFrame(5, '/')
    scorecard.addFrame(7, 1)
    scorecard.addFrame(6, 2)
    scorecard.addFrame(8, '/')
    scorecard.addFrame(2, 3)
    scorecard.addFrame(7, 2)
    scorecard.addFrame('X')
    scorecard.addFrame(7, '/')
    scorecard.addFrame(5, '/', 'X')
    expect(scorecard.calculateScore()).toEqual(122)
  })
})