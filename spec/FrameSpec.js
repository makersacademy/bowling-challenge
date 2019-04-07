describe('Frame', function () {
  if (typeof(require) !== 'undefined') {
    Frame = require('../src/Frame')
  }
  var frame = new Frame()

  describe('.isComplete', function () {
    it('a new frame is not complete', function () {
      expect(frame.isComplete()).toBe(false)
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
