let Scoreboard = require('./scoreboard')

describe('Scoreboard', () => {
  const scoreboard = new Scoreboard()
  const frameDouble1 = { frameResult: () => [1, 4], isSpare: () => false, isStrike: () => false, frameScore: () => 5 }
  const frameDouble2 = { frameResult: () => [4, 5], isSpare: () => false, isStrike: () => false, frameScore: () => 9 }
  const frameDouble3Spare = { frameResult: () => [6, 4], isSpare: () => true, isStrike: () => false, frameScore: () => 10 }
  const frameDouble4 = { frameResult: () => [5, 3], isSpare: () => false, isStrike: () => false, frameScore: () => 8 }
  const frameDouble5Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble6 = { frameResult: () => [3, 3], isSpare: () => false, isStrike: () => false,frameScore: () => 6 }
  const frameDouble7Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble8Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble9Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble10 = { frameResult: () => [5, 3], isSpare: () => false, isStrike: () => false, frameScore: () => 8 }

  describe('allFrames', () => {
    it('initially returns empty array', () => {
      expect(scoreboard.allFrames()).toEqual([])
    })
  })

  describe('addFrame', () => {
    it('returns array of frames', () => {
      scoreboard.addFrame(frameDouble1)
      expect(scoreboard.allFrames()).toStrictEqual([frameDouble1])
      
      scoreboard.addFrame(frameDouble2)
      expect(scoreboard.allFrames()).toStrictEqual([frameDouble1, frameDouble2])
    })
  })

  describe('allFrameScores', () => {
    it('initially returns empty array', () => {
      expect(scoreboard.allFrameScores()).toEqual([])
    })
  })


  describe('scoreTotal', () => {
    it('returns initial total score of 0', () => {
      expect(scoreboard.scoreTotal()).toEqual(0)
    })
  })

  describe('scoreCalculator', () => {
    let scoreboard = new Scoreboard()
    it('totals score after frame 1', () => {
      scoreboard.addFrame(frameDouble1)
      scoreboard.scoreCalculator(frameDouble1)

      expect(scoreboard.allFrameScores()).toEqual([5])
    })

    it('totals score after frame 2', () => {
      scoreboard.addFrame(frameDouble2)
      scoreboard.scoreCalculator(frameDouble2)

      expect(scoreboard.allFrameScores()).toEqual([5, 9])
    })

    it('totals score after frame 3, a spare', () => {
      scoreboard.addFrame(frameDouble3Spare)
      scoreboard.scoreCalculator(frameDouble3Spare)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 10])
    })

    it('totals score after frame 4, after a spare', () => {
      scoreboard.addFrame(frameDouble4)
      scoreboard.scoreCalculator(frameDouble4)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8])
    })

    it('totals score after frame 5, a strike', () => {
      scoreboard.addFrame(frameDouble5Strike)
      scoreboard.scoreCalculator(frameDouble5Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 10])
    })

    it('totals score after frame 6, after a strike', () => {
      scoreboard.addFrame(frameDouble6)
      scoreboard.scoreCalculator(frameDouble6)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 16, 6])
    })

    it('totals score after frame 7, a strike', () => {
      scoreboard.addFrame(frameDouble7Strike)
      scoreboard.scoreCalculator(frameDouble7Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 16, 6, 10])
    })

    it('totals score after frame 8, a strike', () => {
      scoreboard.addFrame(frameDouble8Strike)
      scoreboard.scoreCalculator(frameDouble8Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 16, 6, 20, 10])
    })

    it('totals score after frame 9, a strike', () => {
      scoreboard.addFrame(frameDouble9Strike)
      scoreboard.scoreCalculator(frameDouble9Strike)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 16, 6, 30, 20, 10])
    })

    it('totals score after frame 10, after a strike', () => {
      scoreboard.addFrame(frameDouble10)
      scoreboard.scoreCalculator(frameDouble10)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8, 16, 6, 30, 28, 18, 8])
    })

    
  })
})