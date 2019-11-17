/* eslint-env jasmine */

describe('calculate', function () {
  let scoreSheet

  describe('simple frames', function () {
    it('returns 6 for [[1, 1], [2, 2]]', function () {
      scoreSheet = [[1, 1], [2, 2]]
      expect(calculate(scoreSheet)).toEqual(6)
    })
  })

  describe('spares', function () {
    it('returns 21 for [[5, 5], [5, 1]]', function () {
      scoreSheet = [[5, 5], [5, 1]]
      expect(calculate(scoreSheet)).toEqual(21)
    })
  })

  describe('strikes', function () {
    it('returns 22 for [[10, 0], [5, 1]]', function () {
      scoreSheet = [[10, 0], [5, 1]]
      expect(calculate(scoreSheet)).toEqual(22)
    })
  })
})
