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
        expect(frame.roll1.pins).toEqual(null)
        frame.addRoll(7)
        expect(frame.roll1.pins).toBe(7)
      })
    })

    describe('when called on a frame that already has one roll', function () {
      it('changes roll 2 from null to something', function () {
        frame.addRoll(2)
        expect(frame.roll2.pins).toEqual(null)
        frame.addRoll(7)
        expect(frame.roll2.pins).toBe(7)
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
    describe('if the frame is not complete', function () {
      it('returns null', function () {
        frame.addRoll(1)
        expect(frame.score()).toEqual(null)
      })
    })

    describe('if the frame does not have its bonus', function () {
      it('returns null', function () {
        frame.addRoll(99)
        frame.addRoll(99)
        expect(frame.score()).toEqual(null)
      })
    })

    describe('if the frame does have its bonus', function () {
      it('returns roll 1 + roll 2 + bonus', function () {
        frame.addRoll(99)
        frame.addRoll(99)
        frame.addBonus(2)
        expect(frame.score()).toEqual(200)
      })
    })
  })

  describe('#addBonus', function () {
    it('sets the bonus', function () {
      expect(frame.bonus).toEqual(null)
      frame.addBonus(99)
      expect(frame.bonus).toBe(99)
    })
  })

  describe('#spare', function () {
    it('returns false if the frame is not finished', function () {
      frame.addRoll(2)
      expect(frame.isSpare()).toBe(false)
    })

    it('returns false if the frame is a strike', function () {
      frame.addRoll(10)
      expect(frame.isSpare()).toBe(false)
    })

    it('returns false if the frame is not a spare', function () {
      frame.addRoll(2)
      frame.addRoll(3)
      expect(frame.isSpare()).toBe(false)
    })

    it('returns true if the frame is a spare', function () {
      frame.addRoll(7)
      frame.addRoll(3)
      expect(frame.isSpare()).toBe(true)
    })
  })
})
