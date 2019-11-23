/* eslint-env jasmine */

describe('calculate', function () {
  let scoreSheet

  it('returns 6 for [[1, 1], [2, 2]] (simple frames)', function () {
    scoreSheet = [[1, 1], [2, 2]]
    expect(calculate(scoreSheet)).toEqual(6)
  })

  it('returns 21 for [[5, 5], [5, 1]] (spares)', function () {
    scoreSheet = [[5, 5], [5, 1]]
    expect(calculate(scoreSheet)).toEqual(21)
  })

  it('returns 22 for [[10, 0], [5, 1]] (strikes)', function () {
    scoreSheet = [[10, 0], [5, 1]]
    expect(calculate(scoreSheet)).toEqual(22)
  })

  it('returns 29 for nine frames [1, 1] and final frame [5, 5, 1]', function () {
    scoreSheet = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [5, 5, 1]]
    expect(calculate(scoreSheet)).toEqual(29)
  })

  it('returns 30 for nine frames [1, 1] and final frame [10, 0, 1, 1]', function () {
    scoreSheet = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [10, 0, 1, 1]]
    expect(calculate(scoreSheet)).toEqual(30)
  })
})
