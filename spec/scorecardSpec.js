describe('Scorecard:', function () {
  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('#new:', function () {
    it('_score initializes with 0', function () {
      expect(scorecard._score).toEqual([0])
    })
    it('_allFrames initializes as empty', function () {
      expect(scorecard._allFrames).toEqual([])
    })
  })

  describe('#recording:', function () {
    it('logs the first throw score', function () {
      scorecard.firstThrow(6)
      expect(scorecard._firstThrow).toEqual(6)
    })
    it('logs the second throw score', function () {
      scorecard.secondThrow(3)
      expect(scorecard._secondThrow).toEqual(3)
    })
    it('adds the first and second throw scores to array of all frames', function () {
      scorecard.firstThrow(6)
      scorecard.secondThrow(3)
      scorecard.addToFrames()
      expect(scorecard._allFrames[0]).toEqual([6, 3])
    })
    it('adds the next set of throws to the array of all frames', function () {
      scorecard._allFrames = [[6, 3]]
      scorecard.firstThrow(2)
      scorecard.secondThrow(5)
      scorecard.addToFrames()
      expect(scorecard._allFrames[1]).toEqual([2, 5])
    })
    it('records a strike', function () {
      scorecard.recordStrike()
      expect(scorecard._allFrames[0]).toEqual([10, 0])
    })
  })

  describe('#logic:', function () {
    it('returns true if a strike was scored', function () {
      expect(scorecard.strikeCheck(10)).toEqual(true)
    })
    it('returns true if a spare scored by [5,5]', function () {
      expect(scorecard.spareCheck(5, 5)).toEqual(true)
    })
    it('returns true if a spare scored by [0, 10]', function () {
      expect(scorecard.spareCheck(0, 10)).toEqual(true)
    })
  })

  describe('#updateScores', function () {
    it('should update scores in the scores array for a random game', function () {
      scorecard._allFrames = [
        [10, 0], // Strike on First
        [10, 0],
        [10, 0],
        [0, 5],
        [5, 5],
        [9, 1],
        [0, 0],
        [5, 4],
        [5, 5],
        [10, 5, 5]
      ]
      scorecard.updateScores()
      expect(scorecard._score[0]).toEqual(30)
      expect(scorecard._score[1]).toEqual(20)
      expect(scorecard._score[2]).toEqual(15)
      expect(scorecard._score[3]).toEqual(5)
      expect(scorecard._score[4]).toEqual(19)
      expect(scorecard._score[5]).toEqual(10)
      expect(scorecard._score[6]).toEqual(0)
      expect(scorecard._score[7]).toEqual(9)
      expect(scorecard._score[8]).toEqual(20)
      expect(scorecard._score[9]).toEqual(20)
      expect(scorecard.calculateTotal()).toEqual(148)
    })
    it('should update scores in the scores array for a game with no strikes or spares', function () {
      scorecard._allFrames = [
        [3, 4], // Normal Score on First
        [5, 0],
        [3, 5],
        [0, 8],
        [0, 9],
        [3, 1],
        [5, 4],
        [2, 2],
        [3, 3],
        [4, 2]
      ]
      scorecard.updateScores()
      expect(scorecard._score[0]).toEqual(7)
      expect(scorecard._score[1]).toEqual(5)
      expect(scorecard._score[2]).toEqual(8)
      expect(scorecard._score[3]).toEqual(8)
      expect(scorecard._score[4]).toEqual(9)
      expect(scorecard._score[5]).toEqual(4)
      expect(scorecard._score[6]).toEqual(9)
      expect(scorecard._score[7]).toEqual(4)
      expect(scorecard._score[8]).toEqual(6)
      expect(scorecard._score[9]).toEqual(6)
      expect(scorecard.calculateTotal()).toEqual(66)
    })
    it('should update scores in the scores array for a perfect game', function () {
      scorecard._allFrames = [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ]
      scorecard.updateScores()
      expect(scorecard._score[0]).toEqual(30)
      expect(scorecard._score[1]).toEqual(30)
      expect(scorecard._score[2]).toEqual(30)
      expect(scorecard._score[3]).toEqual(30)
      expect(scorecard._score[4]).toEqual(30)
      expect(scorecard._score[5]).toEqual(30)
      expect(scorecard._score[6]).toEqual(30)
      expect(scorecard._score[7]).toEqual(30)
      expect(scorecard._score[8]).toEqual(30)
      expect(scorecard._score[9]).toEqual(30)
      expect(scorecard.calculateTotal()).toEqual(300)
    })
  })
})
