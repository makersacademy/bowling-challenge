/* eslint-env jasmine */

describe('calculate', function () {
  it('returns the total across all the frames passed in', function () {
    expect(calculate([[1, 1], [2, 2]])).toEqual(6)
  })
})
