/* eslint-env jasmine */

describe('Add and calculate sets of frames', function () {
  var scoreTracker

  beforeEach(function () {
    scoreTracker = new ScoreTracker(calculate)
  })

  describe('one or more simple frames', function () {
    it('takes 1 and 2 and returns 3', function () {
      scoreTracker.add(1)
      scoreTracker.add(2)
      expect(scoreTracker.total()).toEqual(3)
    })

    it('takes 1, 1, 2, 2 and returns 6', function () {
      scoreTracker.add(1)
      scoreTracker.add(1)
      scoreTracker.add(2)
      scoreTracker.add(2)
      expect(scoreTracker.total()).toEqual(6)
    })
  })

  describe('mixed simple frames and spares', function () {
    it('takes 1, 1, 2, 8, 3, 3 and returns 21 - one spare', function () {
      scoreTracker.add(1)
      scoreTracker.add(1)
      scoreTracker.add(2)
      scoreTracker.add(8)
      scoreTracker.add(3)
      scoreTracker.add(3)
      expect(scoreTracker.total()).toEqual(21)
    })

    it('takes 1, 9, 2, 8, 3, 3 and returns 31 - two spares', function () {
      scoreTracker.add(1)
      scoreTracker.add(9)
      scoreTracker.add(2)
      scoreTracker.add(8)
      scoreTracker.add(3)
      scoreTracker.add(3)
      expect(scoreTracker.total()).toEqual(31)
    })
  })
})
