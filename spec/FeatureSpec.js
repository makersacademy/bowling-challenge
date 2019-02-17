describe('Feature Tests', function () {
  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('a gutter game', function () {
    it('has a score of 0', function () {
      for (var i = 0; i < 20; i++) {
        scorecard.rollBall(0)
      }
      expect(scorecard.totalScore).toEqual(0)
    })
  })

  describe('a game with no spares or strikes and the same score each roll', function () {
    it('has a score of 20', function () {
      for (var i = 0; i < 10; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      expect(scorecard.totalScore).toEqual(20)
    })
  })

  describe('a game with no spares or strikes but different scores each roll', function () {
    it('has a score of 51', function () {
      array = [1, 3, 4, 2, 3, 3, 7, 0, 0, 1, 5, 3, 1, 1, 2, 1, 5, 0, 8, 1]
      for (var i = 0; i < array.length; i++) {
        scorecard.rollBall(array[i])
      }
      expect(scorecard.totalScore).toEqual(51)
    })
  })

  describe('a game with one spare in the first round', function () {
    it('has a score of 29', function () {
      scorecard.rollBall(4)
      scorecard.rollBall(6)
      for (var i = 0; i < 9; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      expect(scorecard.totalScore).toEqual(29)
    })
  })

  describe('a game with multiple spares', function () {
    it('has a score of 38', function () {
      scorecard.rollBall(4)
      scorecard.rollBall(6)
      for (var i = 0; i < 3; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      scorecard.rollBall(4)
      scorecard.rollBall(6)
      for (var i = 0; i < 5; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      expect(scorecard.totalScore).toEqual(38)
    })
  })

  describe('a game with a strike', function () {
    it('has a score of 38', function () {
      scorecard.rollBall(10)
      for (var i = 0; i < 9; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      expect(scorecard.totalScore).toEqual(30)
    })
  })

  describe('a perfect game', function () {
    it('has a score of 300', function () {
      for (var i = 0; i < 12; i++) {
        scorecard.rollBall(10)
      }
      expect(scorecard.totalScore).toEqual(300)
    })
  })

  describe('finishing on a spare', function () {
    it('has a score of 32', function () {
      for (var i = 0; i < 9; i++) {
        scorecard.rollBall(1)
        scorecard.rollBall(1)
      }
      scorecard.rollBall(5)
      scorecard.rollBall(5)
      scorecard.rollBall(4)
      expect(scorecard.totalScore).toEqual(32)
    })
  })

  describe('a game with a variety of spares and strikes', function () {
    it('has a score of 133', function () {
      array = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
      for (var i = 0; i < array.length; i++) {
        scorecard.rollBall(array[i])
      }
      expect(scorecard.totalScore).toEqual(133)
    })
  })
})
