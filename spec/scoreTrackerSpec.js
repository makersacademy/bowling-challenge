/* eslint-env jasmine */

describe('ScoreTracker', function () {
  var tracker

  beforeEach(function () {
    var calculate = jasmine.createSpy().and.returnValue(2)
    tracker = new ScoreTracker(calculate)
  })

  it('Accepts scores from user', function () {
    expect(tracker.add(1)).toEqual(1)
  })

  it('Stores scores in a scoresheet', function () {
    tracker.add(1)
    tracker.add(1)
    expect(tracker.scoreSheet()).toContain([1, 1])
  })

  it('Stores scores in frames of two scores each', function () {
    tracker.add(1)
    tracker.add(1)
    tracker.add(2)
    expect(tracker.scoreSheet()).toContain([1, 1], [2])
  })

  it('Returns a total when #total is called', function () {
    expect(tracker.total()).toEqual(2)
  })
})
