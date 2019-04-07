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
})
