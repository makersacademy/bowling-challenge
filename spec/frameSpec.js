const Frame = require('../lib/frame')

describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame()
  })

  describe('.prototype.roll', () => {
    it('adds to the pinfall', () => {
      frame.roll(3)
      frame.roll(4)

      expect(frame.pinfall).toBe(7)
    })
  })
})
