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

  it('returns 29 for a game with final frame [5, 5, 1] (spare)', function () {
    for (var i = 0; i < 18; i++) {
      tracker.add(1)
    }
    for (var i = 0; i < 2; i++) {
      tracker.add(5)
    }
    tracker.add(1)
    expect(tracker.total()).toEqual(29)
  })

  it('returns 30 for a game with final frame [10, 0, 1, 1] (strike)', function () {
    for (var i = 0; i < 18; i++) {
      tracker.add(1)
    }
    tracker.add(10)
    tracker.add(1)
    tracker.add(1)
    expect(tracker.total()).toEqual(30)
  })

  it('returns 0 for a gutter game', function () {
    for (var i = 0; i < 10; i ++) {
      tracker.add(0)
      tracker.add(0)
    }
    expect(tracker.total()).toEqual(0)
  })

  it('returns 300 for a perfect game of strikes', function () {
    for (var i = 0; i < 9; i++) {
      tracker.add(10)
    }
    tracker.add(10)
    tracker.add(10)
    tracker.add(10)
    console.log(JSON.stringify(tracker.scoreSheet()))
    expect(tracker.total()).toEqual(300)
  })
})
