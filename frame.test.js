const Frame = require('./frame')

describe('Frame', () => {
  const frame = new Frame();
  describe('frameResult()', () => {
    it('returns empty array', () => {
      expect(frame.frameResult()).toEqual([])
    })
  })

  describe('ball1()', () => {
    it('adds ball1 to frame', () => {
      frame.ball1(4)
      expect(frame.frameResult()).toEqual([4])
    })
  })

  describe('ball2()', () => {
    it('adds ball2 to frame', () => {
      frame.ball2(3)
      expect(frame.frameResult()).toEqual([4, 3])
    })
  })

  describe('isStrike()', () => {
    it('returns false if not strike', () => {
      frame.ball1(3)
      frame.ball2(4)
      expect(frame.isStrike()).toEqual(false)

      frame.ball1(3)
      frame.ball2(7)
      expect(frame.isStrike()).toEqual(false)
    })

    it('returns true if strike', () => {
      frame.ball1(10)
      expect(frame.isStrike()).toEqual(true)
    })
  })

  describe('isSpare()', () => {
    it('returns false if not spare', () => {
      frame.ball1(10)
      frame.ball2(0)
      expect(frame.isSpare()).toEqual(false)

      frame.ball1(3)
      frame.ball2(4)
      expect(frame.isSpare()).toEqual(false)
    })

    it('returns true if spare', () => {
      frame.ball1(5)
      frame.ball2(5)
      expect(frame.isSpare()).toEqual(true)
    })
  })

  describe('frameScore()', () => {
    it('totals score for first 9 frames', () => {
      frame.ball1(3)
      frame.ball2(4)
      expect(frame.frameScore()).toEqual(7)
    })

    it('totals score for 10th frame', () => {
      frame.ball1(3)
      frame.ball2(4)
      frame.ball3(4)
      expect(frame.frameScore()).toEqual(11)
    })
  })
})