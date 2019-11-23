/* eslint-env jasmine */

describe('calculate', function () {

  it('returns 6 for [[1, 1], [2, 2]] (simple frames)', function () {
    const scoreSheet = [
      [1, 1],
      [2, 2]
    ]
    expect(calculate(scoreSheet)).toEqual(6)
  })

  it('returns 21 for [[5, 5], [5, 1]] (spares)', function () {
    const scoreSheet = [
      [5, 5],
      [5, 1]
    ]
    expect(calculate(scoreSheet)).toEqual(21)
  })

  it('returns 22 for [[10, null], [5, 1]] (strikes)', function () {
    const scoreSheet = [
      [10, null],
      [5, 1]
    ]
    expect(calculate(scoreSheet)).toEqual(22)
  })

  it('returns 29 for nine frames [1, 1] and final frame [5, 5, 1]', function () {
    const scoreSheet = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [5, 5, 1]
    ]
    expect(calculate(scoreSheet)).toEqual(29)
  })

  it('returns 30 for nine frames [1, 1] and final frame [10, null, 1, 1]', function () {
    const scoreSheet = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [10, null, 1, 1]
    ]
    expect(calculate(scoreSheet)).toEqual(30)
  })

  it('returns 0 for a gutter game', function () {
    const scoreSheet = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]
    expect(calculate(scoreSheet)).toEqual(0)
  })

  it('calculates for simple, strike, simple', function () {
    const scoreSheet = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [10, null],
      [2, 2]
    ]
    expect(calculate(scoreSheet)).toEqual(20)
  })

  it('calcultes for strike, strike, simple', function () {
    const scoreSheet = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [10, null],
      [10, null],
      [4, 0]
    ]
    expect(calculate(scoreSheet)).toEqual(42)
  })

  it('calculates for a strike in frame 9', function () {
    const scoreSheet = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [10, null],
      [10, 10, 1]
    ]
    expect(calculate(scoreSheet)).toEqual(51)
  })

  it('returns 300 for a perfect game', function () {
    const scoreSheet = [
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null, 10, 10],
    ]
    expect(calculate(scoreSheet)).toEqual(300)
  })
})
