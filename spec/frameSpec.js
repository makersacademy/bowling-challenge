const Frame = require('../lib/frame')

describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame()
  })

  describe('.prototype.addRoll()', () => {
    it('adds to the pinfall', () => {
      frame.addRoll(3)
      frame.addRoll(4)

      expect(frame.pinfall).toBe(7)
    })

    it('adds to the number of rolls', () => {
      frame.addRoll(3)
      frame.addRoll(4)

      expect(frame.numOfRolls).toBe(2)
    })
  })

  describe('.prototype.isStrike', () => {
    it('returns true if the frame is a strike', () => {
      frame.addRoll(10)

      expect(frame.isStrike).toBe(true)
    })

    it('returns false if the frame is not a strike', () => {
      frame.addRoll(0)
      frame.addRoll(10)

      expect(frame.isStrike).toBe(false)
    })
  })

  describe('.prototype.isSpare', () => {
    it('returns true if the frame is a spare', () => {
      frame.addRoll(6)
      frame.addRoll(4)

      expect(frame.isSpare).toBe(true)
    })

    it('returns false if the frame is not a spare', () => {
      frame.addRoll(6)
      frame.addRoll(3)

      expect(frame.isSpare).toBe(false)
    })

    it('returns false if the frame is a strike', () => {
      frame.addRoll(10)

      expect(frame.isSpare).toBe(false)
    })
  })

  describe('.prototype.addBonus()', () => {
    it('adds to the score of the frame but not the pinfall', () => {
      frame.addRoll(10)

      expect(frame.pinfall).toBe(10)
      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)

      expect(frame.pinfall).toBe(10)
      expect(frame.score).toBe(19)
    })

    it('can add bonus rolls twice after a strike', () => {
      frame.addRoll(10)

      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)
      frame.addBonus(4)

      expect(frame.score).toBe(19)
    })

    it('can add bonus roll once after a spare', () => {
      frame.addRoll(6)
      frame.addRoll(4)

      expect(frame.score).toBe(10)

      frame.addBonus(3)
      frame.addBonus(6)

      expect(frame.score).toBe(13)
    })

    it('cannot add bonus rolls if frame not strike or spare', () => {
      frame.addRoll(2)
      frame.addRoll(1)
      frame.addBonus(4)

      expect(frame.score).toBe(3)
    })
  })

  describe('.prototype.isFinalized', () => {
    describe('for a normal frame', () => {
      describe('when no strike or spare', () => {
        it('returns false when no rolls', () => {
          expect(frame.isFinalized).toBe(false)
        })

        it('returns false when not at max rolls', () => {
          frame.addRoll(4)

          expect(frame.isFinalized).toBe(false)
        })

        it('returns true when at max rolls', () => {
          frame.addRoll(4)
          frame.addRoll(3)

          expect(frame.isFinalized).toBe(true)
        })
      })

      describe('after a strike', () => {
        it('when not all bonuses added it returns false', () => {
          frame.addRoll(10)

          expect(frame.isFinalized).toBe(false)
        })

        it('when all bonus rolls added it returns true', () => {
          frame.addRoll(10)
          frame.addBonus(3)
          frame.addBonus(4)

          expect(frame.isFinalized).toBe(true)
        })
      })

      describe('after a spare', () => {
        it('when not all bonuses added it returns false', () => {
          frame.addRoll(5)
          frame.addRoll(5)

          expect(frame.isFinalized).toBe(false)
        })

        it('when all bonus rolls added it returns true', () => {
          frame.addRoll(5)
          frame.addRoll(5)
          frame.addBonus(3)

          expect(frame.isFinalized).toBe(true)
        })
      })
    })
  })
})
