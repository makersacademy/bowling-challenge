const Bowling = require('./game')

describe('bowling #score', () => {
  test('shows player total score', () => {
    const bowling = new Bowling
    bowling.hit(4 * 20) 
    expect(bowling.totalScore()).toEqual(80)
  })
  test('shows player total score roll in frame 1', () => {
    bowling = new Bowling
    bowling.hit(2 * 1)
    expect(bowling.totalScore()).toEqual(2)
  })
  test('shows spare spare frame', () => {
    bowling = new Bowling
    bowling.hit(5 * 2)
    expect(bowling.spareFrame()).toEqual(true)
  })
})