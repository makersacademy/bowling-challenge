/* eslint-env jasmine */

describe('mixed simple frames and spares', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  it('takes 1, 1, 2, 8, 3, 3 and returns 21 - one spare', function () {
    scoreTracker.add(1)
    scoreTracker.add(1)
    scoreTracker.add(2)
    scoreTracker.add(8)
    scoreTracker.add(3)
    scoreTracker.add(3)
    expect(scoreTracker.total()).toEqual(21)
  })

  it('takes 1, 9, 2, 8, 3, 3 and returns 31 - two spares', function () {
    scoreTracker.add(1)
    scoreTracker.add(9)
    scoreTracker.add(2)
    scoreTracker.add(8)
    scoreTracker.add(3)
    scoreTracker.add(3)
    expect(scoreTracker.total()).toEqual(31)
  })
})
