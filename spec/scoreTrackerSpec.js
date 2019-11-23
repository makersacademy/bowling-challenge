/* eslint-env jasmine */

describe('ScoreTracker', function () {
  var tracker

  beforeEach(function () {
    var calculate = jasmine.createSpy().and.returnValue(2)
    tracker = new ScoreTracker(calculate)
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

  it('Throws if a score is added after 10 frames of 2 normal rolls', function () {
    for (var i = 0; i < 20; i ++) {
      tracker.add(1)
    }
    expect(function () { tracker.add(1) }).toThrow('Game complete')
  })

  it('Allows a bonus roll if the final frame is a spare', function () {
    for (var i = 0; i < 18; i ++) {
      tracker.add(1)
    }
    for (var i = 0; i < 2; i ++) {
      tracker.add(5)
    }
    expect(function () { tracker.add(1) }).not.toThrow()
  })
})
