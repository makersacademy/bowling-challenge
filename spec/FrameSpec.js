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

  describe('.addRoll', function () {
    describe('on a new frame', function () {
      it('records the first roll', function () {
        frame.addRoll(2)
        expect(frame.roll1).toEqual(2)
      })

      it('leaves the second roll empty', function () {
        frame.addRoll(2)
        expect(frame.roll2).toEqual(null)
      })
    })

    describe('if one roll has been recorded', function () {
      it('records the second roll', function () {
        frame.addRoll(2)
        frame.addRoll(5)
        expect(frame.roll2).toEqual(5)
      })

      it('leaves the first roll as it is', function () {
        frame.addRoll(2)
        frame.addRoll(5)
        expect(frame.roll1).toEqual(2)
      })
    })

    describe('if the second roll brings the total to more than 10', function () {
      it('raises an error', function () {
        frame.addRoll(5)
        expect(function () {
          frame.addRoll(6)
        }).toThrow(new Error('Could not record roll. Frame total would be more than 10.'))
      })
    })

    describe('if two rolls have been recorded', function () {
      it('raises an error', function () {
        frame.addRoll(1)
        frame.addRoll(1)
        expect(function () {
          frame.addRoll(1)
        }).toThrow(new Error('Could not record roll. Frame is complete.'))
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
