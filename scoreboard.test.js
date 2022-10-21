let Scoreboard = require('./scoreboard')

describe('Scoreboard', () => {
  const scoreboard = new Scoreboard()
  const frameDouble1 = { frameResult: () => [1, 4], isSpare: () => false}
  const frameDouble2 = { frameResult: () => [4, 5], isSpare: () => false }
  const frameDouble3Spare = { frameResult: () => [6, 4], isSpare: () => true }
  const frameDouble4 = { frameResult: () => [5, 3], isSpare: () => false }


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
      expect(scoreboard.scoreTotal()).toEqual(5)
    })

    it('totals score after frame 2', () => {
      scoreboard.addFrame(frameDouble2)
      scoreboard.scoreCalculator(frameDouble2)
      expect(scoreboard.scoreTotal()).toEqual(14) // 5 + (4 + 5)
    })

    it('totals score after frame 3', () => {
      scoreboard.addFrame(frameDouble3Spare)
      scoreboard.scoreCalculator(frameDouble3Spare)
      expect(scoreboard.scoreTotal()).toEqual(24) // 14 + 10
    })

    it('totals score after frame 4', () => {
      scoreboard.addFrame(frameDouble4)
      scoreboard.scoreCalculator(frameDouble4)
      expect(scoreboard.scoreTotal()).toEqual(42) // 24 + (5 + 3) + 10
    })
  })
})