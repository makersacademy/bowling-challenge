/* eslint-env jasmine */

describe('ending the game', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  it('Returns total when #total is called after 10 frames', function () {
    for (var i = 0; i < 20; i++) {
      scoreTracker.add(1)
    }
    expect(scoreTracker.total()).toEqual(20)
  })
})
