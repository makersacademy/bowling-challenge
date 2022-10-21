let Scoreboard = require('./scoreboard')

describe('Scoreboard', () => {
  const scoreboard = new Scoreboard()
  const frameDouble1 = { frameResult: () => [1, 4], isSpare: () => false, isStrike: () => true, frameScore: () => 5 }
  const frameDouble2 = { frameResult: () => [4, 5], isSpare: () => false, isStrike: () => true, frameScore: () => 9 }
  const frameDouble3Spare = { frameResult: () => [6, 4], isSpare: () => true, isStrike: () => true, frameScore: () => 10 }
  const frameDouble4 = { frameResult: () => [5, 3], isSpare: () => false, isStrike: () => true, frameScore: () => 8 }
  const frameDouble5Strike = { frameResult: () => [10, 0], isSpare: () => false, isStrike: () => true, frameScore: () => 10 }
  const frameDouble6 = { frameResult: () => [3, 3], isSpare: () => false, isStrike: () => false,frameScore: () => 6 }

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
      //expect(scoreboard.scoreTotal()).toEqual(5)
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
      //expect(scoreboard.scoreTotal()).toEqual(24) // 14 + 10
    })

    it('totals score after frame 4, after a spare', () => {
      scoreboard.addFrame(frameDouble4)
      scoreboard.scoreCalculator(frameDouble4)

      expect(scoreboard.allFrameScores()).toEqual([5, 9, 15, 8])
      //expect(scoreboard.scoreTotal()).toEqual(42) // 24 + (5 + 3) + 10
    })

    xit('totals score after frame 5, a strike', () => {
      scoreboard.addFrame(frameDouble5Strike)
      scoreboard.scoreCalculator(frameDouble5Strike)
      expect(scoreboard.scoreTotal()).toEqual(52) // 42 + 10
    })

    xit('totals score after frame 6, after a strike', () => {
      scoreboard.addFrame(frameDouble6)
      scoreboard.scoreCalculator(frameDouble6)
      expect(scoreboard.scoreTotal()).toEqual(64) // 52 + (3 + 3) + (3 + 3)
    })
  })
})