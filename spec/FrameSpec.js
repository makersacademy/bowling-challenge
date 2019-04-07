describe('Frame', function () {
  var frame

  if (typeof(require) !== 'undefined') {
    Frame = require('../src/Frame')
  }

  beforeEach(function () {
    frame = new Frame()
  })

  describe('.isComplete', function () {
    it('a new frame is not complete', function () {
      expect(frame.isComplete()).toBe(false)
    })

    it('if .roll1 and .roll2 are not null the frame is complete', function () {
      frame.roll1 = 0
      frame.roll2 = 0
      expect(frame.isComplete()).toBe(true)
    })
  })

  describe('.roll1', function () {
    it('returns "null" for a new frame', function () {
      expect(frame.roll1).toEqual(null)
    })
  })

  describe('.roll2', function () {
    it('returns "null" for a new frame', function () {
      expect(frame.roll2).toEqual(null)
    })
  })
})
