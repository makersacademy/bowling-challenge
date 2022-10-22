const Scoreboard = require('./scoreboard')

describe('Scoreboard', () => {
  let scoreboard = new Scoreboard()
  const frameDouble1 = { frameResult: () => [1, 4], isSpare: () => false, isStrike: () => false, frameScore: () => 5 }
  const frameDouble2Spare = { frameResult: () => [6, 4], isSpare: () => true, isStrike: () => false, frameScore: () => 10 }
  const frameDouble3 = { frameResult: () => [5, 3], isSpare: () => false, isStrike: () => false, frameScore: () => 8 }
  const frameDouble4Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble5 = { frameResult: () => [3, 3], isSpare: () => false, isStrike: () => false,frameScore: () => 6 }
  const frameDouble6Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble7Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble8Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble9 = { frameResult: () => [5, 3], isSpare: () => false, isStrike: () => false, frameScore: () => 8 }

  describe('allFrames', () => {
    it('initially returns empty array', () => {
      expect(scoreboard.allFrames()).toEqual([])
    })
  })

  describe('addFrame', () => {
    it('returns array of frames', () => {
      scoreboard.addFrame(frameDouble1)
      expect(scoreboard.allFrames()).toStrictEqual([frameDouble1])
      
      scoreboard.addFrame(frameDouble2Spare)
      expect(scoreboard.allFrames()).toStrictEqual([frameDouble1, frameDouble2Spare])
    })
  })

  describe('allFrameScores', () => {
    it('initially returns empty array', () => {
      expect(scoreboard.allFrameScores()).toEqual([])
    })
  })

  describe('scoreCalculator', () => {
    let scoreboard = new Scoreboard()
    it('totals score after frame 1', () => {
      scoreboard.addFrame(frameDouble1)
      scoreboard.scoreCalculator(frameDouble1)

      expect(scoreboard.allFrameScores()).toEqual([5])
    })

    it('totals score after frame 2, a spare', () => {
      scoreboard.addFrame(frameDouble2Spare)
      scoreboard.scoreCalculator(frameDouble2Spare)

      expect(scoreboard.allFrameScores()).toEqual([5, 10])
    })

    it('totals score after frame 3, after a spare', () => {
      scoreboard.addFrame(frameDouble3)
      scoreboard.scoreCalculator(frameDouble3)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8])
    })

    it('totals score after frame 4, a strike', () => {
      scoreboard.addFrame(frameDouble4Strike)
      scoreboard.scoreCalculator(frameDouble4Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 10])
    })

    it('totals score after frame 5, after a strike', () => {
      scoreboard.addFrame(frameDouble5)
      scoreboard.scoreCalculator(frameDouble5)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 16, 6])
    })

    it('totals score after frame 6, a strike', () => {
      scoreboard.addFrame(frameDouble6Strike)
      scoreboard.scoreCalculator(frameDouble6Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 10])
    })

    it('totals score after frame 7, a strike', () => {
      scoreboard.addFrame(frameDouble7Strike)
      scoreboard.scoreCalculator(frameDouble7Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 20, 10])
    })

    it('totals score after frame 8, a strike', () => {
      scoreboard.addFrame(frameDouble8Strike)
      scoreboard.scoreCalculator(frameDouble8Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 30, 20, 10])
    })

    it('totals score after frame 9, after a strike', () => {
      scoreboard.addFrame(frameDouble9)
      scoreboard.scoreCalculator(frameDouble9)

      expect(scoreboard.allFrameScores()).toEqual([5, 15, 8, 16, 6, 30, 28, 18, 8])
    })

   
  })

  describe('scoreTotal', () => {
    it('returns total after several frames are played', () => {
      scoreboard.addFrame(frameDouble1)
      scoreboard.scoreCalculator(frameDouble1)

      scoreboard.addFrame(frameDouble2Spare)
      scoreboard.scoreCalculator(frameDouble2Spare)

      expect(scoreboard.scoreTotal()).toEqual(15)
    })
  })

})