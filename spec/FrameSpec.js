describe('Frame', function () {
  if (typeof(require) !== 'undefined') {
    Frame = require ('../lib/Frame')
  }

  var frame

  beforeEach(function () {
    frame = new Frame()
  })

  describe('#addRoll', function () {
    describe('when called on a new frame', function () {
      it('changes roll 1 from null to something', function () {
        expect(frame.roll1).toEqual(null)
        frame.addRoll(7)
        expect(frame.roll1).toBe(7)
      })
    })

    describe('when called on a frame that already has one roll', function () {
      it('changes roll 2 from null to something', function () {
        frame.addRoll(2)
        expect(frame.roll2).toEqual(null)
        frame.addRoll(7)
        expect(frame.roll2).toBe(7)
      })
    })
  })

  describe('#isComplete', function () {
    describe('if the frame has one roll of 2', function () {
      it('returns false', function () {
        frame.addRoll(2)
        expect(frame.isComplete()).toBe(false)
      })
    })

    describe('if the frame has rolls of 2 and 3', function () {
      it('returns true', function () {
        frame.addRoll(2)
        frame.addRoll(3)
        expect(frame.isComplete()).toBe(true)
      })
    })

    describe('if the frame has one roll of 10', function () {
      it('returns true', function () {
        frame.addRoll(10)
        expect(frame.isComplete()).toBe(true)
      })
    })
  })

  describe('#score', function () {
    describe('if the frame has rolls of 3 and 4', function () {
      it('returns 7', function () {
        frame.addRoll(3)
        frame.addRoll(4)
        expect(frame.score()).toBe(7)
      })
    })
  })
})
