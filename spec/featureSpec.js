/* eslint-env jasmine */

describe('entering and totaling a single frame', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  it('takes 0 and 0 and returns 0', function () {
    scoreTracker.add(1)
    scoreTracker.add(2)
    expect(scoreTracker.total()).toEqual(3)
  })

  it('takes 1 and 2 and returns 3', function () {
    scoreTracker.add(1)
    scoreTracker.add(2)
    expect(scoreTracker.total()).toEqual(3)
  })
})

describe('entering and totaling multiple frames', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  it('takes 1, 1, 2, 2 and returns 6', function () {
    scoreTracker.add(1)
    scoreTracker.add(1)
    scoreTracker.add(2)
    scoreTracker.add(2)
    expect(scoreTracker.total()).toEqual(6)
  })
})
