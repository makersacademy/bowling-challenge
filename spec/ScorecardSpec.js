'use strict'

describe('Scorecard:', function () {
  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('new:', function () {
    it('_scores is empty', function () {
      expect(scorecard.currentScores()).toEqual([])
    })

    it('_frames is empty', function () {
      expect(scorecard.currentFrames()).toEqual([])
    })
  })

  describe('.throw:', function () {
    it('calls .recordsAStrike if 10 is entered on the first throw of a frame', function () {
      scorecard.throw(10)
      expect(scorecard.currentScores()).toEqual([10, 0])
    })

    it('calls .recordsNumerOf(pinsKnockedDown) for all other numbers', function () {
      scorecard.throw(5)
      expect(scorecard.currentScores()).toEqual([5])
    })

    it('calls .thenTalliesTheScoreAtTheEndOfEachFrame', function () {
      scorecard.throw(3)
      scorecard.throw(4)
      expect(scorecard.currentFrames()).toEqual([7])
    })
  })

  describe('.recordsAStrike:', function () {
    it('10, and 0 have been added to _scores', function () {
      scorecard.recordsAStrike()
      expect(scorecard.currentScores()).toEqual([10, 0])
    })
  })

  describe('.recordsNumberOf(pinsKnockedDown):', function () {
    it('5 has been added to _scores', function () {
      scorecard.recordsNumberOf(5)
      expect(scorecard.currentScores()).toEqual([5])
    })
  })

  describe('.thenTalliesTheScoreAtTheEndOfEachFrame:', function () {
    it('the scores from a non-strike/non-spare frame are tallied and added to _frames', function () {
      scorecard._scores.push(3, 4)
      scorecard.thenTalliesTheScoreAtTheEndOfEachFrame()
      expect(scorecard.currentFrames()).toEqual([7])
    })

    it('the scores from a spare frame are tallied after one more throw', function () {
      scorecard._scores.push(5, 5, 5)
      scorecard.thenTalliesTheScoreAtTheEndOfEachFrame()
      expect(scorecard.currentFrames()).toEqual([15])
    })

    it('the scores from a strike frame are talled after two more throws', function () {
      scorecard._scores.push(10, 0, 10, 0, 10, 0)
      scorecard.thenTalliesTheScoreAtTheEndOfEachFrame()
      expect(scorecard.currentFrames()).toEqual([30])
    })

    it('calls .recordsTheTallyAtTheEndOfThisFrameAs(hold, i)', function () {
      scorecard._scores.push(10, 0, 10, 0, 10, 0)
      scorecard.thenTalliesTheScoreAtTheEndOfEachFrame()
      expect(scorecard.currentFrames()).toEqual([30])
    })
  })

  describe('.recordsTheTallyAtTheEndOfThisFrameAs(hold, i)', function () {
    it('adds the tally being held to _frames', function () {
      scorecard.recordsTheTallyAtTheEndOfThisFrameAs(7, 1)
      expect(scorecard.currentFrames()).toEqual([7])
    })
  })
})
