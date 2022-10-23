const Frame = require('./frame')

describe('Frame', () => {
  let frame = new Frame([1, 3]);
  describe('frameResult()', () => {
    it('returns frame', () => {
      expect(frame.frameResult()).toEqual([1, 3])
    })    
  })

  describe('checkIfStrike()', () => {
    it('returns false if not strike', () => {
      const frame1 = new Frame([3, 4])
      expect(frame1.checkIfStrike()).toEqual(false)

      const frame2 = new Frame([3, 7])
      expect(frame2.checkIfStrike()).toEqual(false)
    })

    it('returns true if strike', () => {
      let frame = new Frame([10, 0])
      expect(frame.checkIfStrike()).toEqual(true)
    })
  })

  describe('checkIfSpare()', () => {
    it('returns false if not spare', () => {
      let frame = new Frame([3, 5])
      expect(frame.checkIfSpare()).toEqual(false)

      let frame2 = new Frame([10, 0])
      expect(frame2.checkIfSpare()).toEqual(false)
    })

    it('returns true if spare', () => {
      const frame = new Frame([3, 7])
      expect(frame.checkIfSpare()).toEqual(true)
    })
  })

  describe('frameScore()', () => {
    it('totals score for first 9 frames', () => {
      const frame = new Frame([3, 4])
      expect(frame.frameScore()).toEqual(7)
    })

  })
})