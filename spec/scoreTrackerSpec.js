/* eslint-env jasmine */

describe('ScoreTracker', function () {
  var tracker

  beforeEach(function () {
    tracker = new ScoreTracker()
  })

  it('Accepts scores from user', function () {
    expect(tracker.add(1)).toEqual(1)
  })

  it('Stores scores in a scoresheet', function () {
    tracker.add(1)
    tracker.add(1)
    expect(tracker.scoreSheet()).toContain(1, 1)
  })
})
