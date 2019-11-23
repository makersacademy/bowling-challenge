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

  it('Adds a bonus roll if final frame is a spare', function () {
    for (var i = 0; i < 18; i ++) {
      tracker.add(1)
    }
    for (var i = 0; i < 2; i ++) {
      tracker.add(5)
    }
    tracker.add(1)
    expect(tracker.scoreSheet()).toContain([5, 5, 1])
  })

  it('Does not allow more than one bonus roll after a spare', function () {
    for (var i = 0; i < 18; i ++) {
      tracker.add(1)
    }
    for (var i = 0; i < 2; i ++) {
      tracker.add(5)
    }
    tracker.add(1)
    expect(function () { tracker.add(1) }).toThrow('Game complete')
  })

  it('Adds two bonus rolls if final frame is a strike', function () {
    for (var i = 0; i < 18; i ++) {
      tracker.add(1)
    }
    tracker.add(10)
    for (var i = 0; i < 2; i ++) {
      tracker.add(1)
    }
    expect(tracker.scoreSheet()).toContain([10, null, 1, 1])
  })

  it('Does not allow more than two bonus rolls after a strike', function () {
    for (var i = 0; i < 18; i ++) {
      tracker.add(1)
    }
    tracker.add(10)
    for (var i = 0; i < 2; i ++) {
      tracker.add(1)
    }
    expect(function () { tracker.add(1) }).toThrow('Game complete')
  })
})
