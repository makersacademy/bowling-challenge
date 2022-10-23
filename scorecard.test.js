const Scorecard = require('./scorecard')

describe('scorecard', () => {
  let scorecard = new Scorecard()
  const frameDouble1 = { frameResult: () => [1, 4], checkIfSpare: () => false, checkIfStrike: () => false, frameScore: () => 5 }
  const frameDouble2Spare = { frameResult: () => [6, 4], checkIfSpare: () => true, checkIfStrike: () => false, frameScore: () => 10 }
  const frameDouble3 = { frameResult: () => [5, 3], checkIfSpare: () => false, checkIfStrike: () => false, frameScore: () => 8 }
  const frameDouble4Strike = { frameResult: () => [10, 0], checkIfSpare: () => false, checkIfStrike: () => true, frameScore: () => 10 }
  const frameDouble5 = { frameResult: () => [3, 3], checkIfSpare: () => false, checkIfStrike: () => false,frameScore: () => 6 }
  const frameDouble6Strike = { frameResult: () => [10, 0], checkIfSpare: () => false, checkIfStrike: () => true, frameScore: () => 10 }
  const frameDouble7Strike = { frameResult: () => [10, 0], checkIfSpare: () => false, checkIfStrike: () => true, frameScore: () => 10 }
  const frameDouble8Strike = { frameResult: () => [10, 0], checkIfSpare: () => false, checkIfStrike: () => true, frameScore: () => 10 }
  const frameDouble9 = { frameResult: () => [5, 3], checkIfSpare: () => false, checkIfStrike: () => false, frameScore: () => 8 }
  const frameDouble10 = { frameResult: () => [1, 9, 10], checkIfSpare: () => true, checkIfStrike: () => false, frameScore: () => 10 }

  
  describe('allFrameScores', () => {
    it('initially returns empty array', () => {
      expect(scorecard.allFrameScores()).toEqual([])
    })
  })

  describe('scoreCalculator', () => {
    let scorecard = new Scorecard()
    it('totals score after frame 1', () => {
      scorecard.addFrame(frameDouble1)
      scorecard.scoreCalculator(frameDouble1)

      expect(scorecard.allFrameScores()).toEqual([5])
    })

    it('totals score after frame 2, a spare', () => {
      scorecard.addFrame(frameDouble2Spare)
      scorecard.scoreCalculator(frameDouble2Spare)

      expect(scorecard.allFrameScores()).toEqual([5, 10])
    })

    it('totals score after frame 3, after a spare', () => {
      scorecard.addFrame(frameDouble3)
      scorecard.scoreCalculator(frameDouble3)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8])
    })

    it('totals score after frame 4, a strike', () => {
      scorecard.addFrame(frameDouble4Strike)
      scorecard.scoreCalculator(frameDouble4Strike)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 10])
    })

    it('totals score after frame 5, after a strike', () => {
      scorecard.addFrame(frameDouble5)
      scorecard.scoreCalculator(frameDouble5)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6])
    })

    it('totals score after frame 6, a strike', () => {
      scorecard.addFrame(frameDouble6Strike)
      scorecard.scoreCalculator(frameDouble6Strike)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 10])
    })

    it('totals score after frame 7, a strike', () => {
      scorecard.addFrame(frameDouble7Strike)
      scorecard.scoreCalculator(frameDouble7Strike)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 20, 10])
    })

    it('totals score after frame 8, a strike', () => {
      scorecard.addFrame(frameDouble8Strike)
      scorecard.scoreCalculator(frameDouble8Strike)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 30, 20, 10])
    })

    it('totals score after frame 9, after a strike', () => {
      scorecard.addFrame(frameDouble9)
      scorecard.scoreCalculator(frameDouble9)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 30, 28, 18, 8])
    })

    it('totals score after frame 10', () => {
      scorecard.addFrame(frameDouble10)
      scorecard.scoreCalculator(frameDouble10)

      expect(scorecard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 30, 28, 18, 8, 20])
    })
  })

  describe('scoreTotal', () => {
    it('returns total after several frames are played', () => {
      scorecard.addFrame(frameDouble1)
      scorecard.scoreCalculator(frameDouble1)

      scorecard.addFrame(frameDouble2Spare)
      scorecard.scoreCalculator(frameDouble2Spare)

      expect(scorecard.scoreTotal()).toEqual(15)
    })
  })

  describe('getPreviousFrame ()', () => {
    it('returns previous frame', () => {
      let scorecard = new Scorecard()
      scorecard.addFrame(frameDouble1)
      scorecard.addFrame(frameDouble2Spare)

      expect(scorecard.getPreviousFrame()).toEqual(frameDouble1)
    })
  })

  describe('calculatePreviousBonuses(frame)', () => {
    it('adds bonus to previous frame', () => {
      let scorecard = new Scorecard()
      scorecard.addFrame(frameDouble2Spare)
      scorecard.addFrameScore(frameDouble2Spare, 0)
      scorecard.addFrame(frameDouble1)
      scorecard.calculatePreviousBonuses(frameDouble1)
      scorecard.addFrameScore(frameDouble1, 0)
      expect(scorecard.allFrameScores()).toEqual([11, 5])

      scorecard.addFrame(frameDouble4Strike)
      scorecard.addFrameScore(frameDouble4Strike, 0)
      scorecard.addFrame(frameDouble3)
      scorecard.calculatePreviousBonuses(frameDouble3)
      scorecard.addFrameScore(frameDouble3, 0)
      expect(scorecard.allFrameScores()).toEqual([11, 5, 18, 8])
    })
  })

  describe('getSecondPreviousFrameIfDoubleStrike ()', () => {
    it('returns true', () => {
      let scorecard = new Scorecard()
      scorecard.addFrame(frameDouble6Strike)
      scorecard.addFrameScore(frameDouble6Strike, 0)
      scorecard.addFrame(frameDouble4Strike)
      scorecard.addFrameScore(frameDouble4Strike, 0)
      scorecard.addFrame(frameDouble4Strike)
      scorecard.addFrameScore(frameDouble4Strike, 0)

      expect(scorecard.getSecondPreviousFrameIfDoubleStrike()).toEqual(true)
    })
  })

})