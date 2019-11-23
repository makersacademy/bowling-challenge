/* eslint-env jasmine */

describe('Add and score complete game', function () {
  var tracker

  beforeEach(function () {
    tracker = new ScoreTracker(calculate)
  })

  it('returns 20 for a game of 20 rolls of 1', function () {
    for (var i = 0; i < 20; i++) {
      tracker.add(1)
    }
    expect(tracker.total()).toEqual(20)
  })

  it('returns 18 + 5 + 5 + 5 for a game ending with a spare', function () {
    for (var i = 0; i < 18; i++) {
      tracker.add(1)
    }
    for (var i = 0; i < 3; i++) {
      tracker.add(5)
    }
    expect(tracker.total()).toEqual(33)
  })

})
