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
})
