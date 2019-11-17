/* eslint-env jasmine */

describe('ending the game', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  it('Returns the total after 10 frames', function () {
    for (var i = 0; i < 19; i++) {
      scoreTracker.add(1)
    }
    expect(scoreTracker.add(1)).toEqual(20)
  })
})
