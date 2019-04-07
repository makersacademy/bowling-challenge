describe('Frame', function () {
  var frame

  if (typeof(require) !== 'undefined') {
    Frame = require('../src/Frame')
  }

  beforeEach(function () {
    frame = new Frame()
  })

  describe('initialisation', function () {
    it('a new frame is not complete', function () {
      expect(frame.isComplete()).toBe(false)
    })

    describe('.roll1', function () {
      it('a new frame has no first roll', function () {
        expect(frame.roll1).toEqual(null)
      })
    })

    describe('.roll2', function () {
      it('a new frame has no second roll', function () {
        expect(frame.roll2).toEqual(null)
      })
    })
  })

  describe('.isComplete', function () {
    it('if two rolls are recorded the frame is complete', function () {
      frame.roll1 = 0
      frame.roll2 = 0
      expect(frame.isComplete()).toBe(true)
    })
  })
})
