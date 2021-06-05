const Frame = require('../lib/frame')

describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame()
  })

  describe('.prototype.roll()', () => {
    it('adds to the pinfall', () => {
      frame.roll(3)
      frame.roll(4)

      expect(frame.pinfall).toBe(7)
    })

    it('adds to the number of rolls', () => {
      frame.roll(3)
      frame.roll(4)

      expect(frame.numOfRolls).toBe(2)
    })
  })

  describe('.prototype.isStrike', () => {
    it('returns true if the frame is a strike', () => {
      frame.roll(10)

      expect(frame.isStrike).toBe(true)
    })

    it('returns false if the frame is not a strike', () => {
      frame.roll(0)
      frame.roll(10)

      expect(frame.isStrike).toBe(false)
    })
  })

  describe('.prototype.isSpare', () => {
    it('returns true if the frame is a spare', () => {
      frame.roll(6)
      frame.roll(4)

      expect(frame.isSpare).toBe(true)
    })

    it('returns false if the frame is not a spare', () => {
      frame.roll(6)
      frame.roll(3)

      expect(frame.isSpare).toBe(false)
    })

    it('returns false if the frame is a strike', () => {
      frame.roll(10)

      expect(frame.isSpare).toBe(false)
    })
  })

  describe('.prototype.addBonus()', () => {
    it('adds to the score of the frame but not the pinfall', () => {
      frame.roll(10)

      expect(frame.pinfall).toBe(10)
      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)

      expect(frame.pinfall).toBe(10)
      expect(frame.score).toBe(19)
    })

    it('can add bonus rolls twice after a strike', () => {
      frame.roll(10)

      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)
      frame.addBonus(4)

      expect(frame.score).toBe(19)
    })

    it('can add bonus roll once after a spare', () => {
      frame.roll(6)
      frame.roll(4)

      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)

      expect(frame.score).toBe(13)
    })

    it('cannot add bonus rolls if frame not strike or spare', () => {
      frame.roll(2)
      frame.roll(1)
      frame.addBonus(4)

      expect(frame.score).toBe(3)
    })
  })
})
