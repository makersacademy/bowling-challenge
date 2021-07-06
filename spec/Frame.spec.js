describe('Frame', function () {
  var frame
  var nextFrame
  var nextNextFrame

  beforeEach(function () {
    frame = new Frame()
    nextFrame = new Frame()
    nextNextFrame = new Frame()
  })

  describe('A frame', function () {
    it('should have a score', function () {
      expect(frame.getScore()).toEqual(0)
    })

    it('should have a max score of 10', function () {
      expect(frame.MAXIMUM_PINS).toEqual(10)
    })

    it('can store bowls', function () {
      expect(frame.getBowls()).toEqual([])
    })

    it('is finished when two bowls are played', function () {
      frame.bowl(5)
      frame.bowl(2)
      expect(frame.isFinished()).toBe(true)
    })

    it('can return the quantity of bowls', function () {
      frame.bowl(5)
      frame.bowl(2)
      expect(frame.numberOfBowls()).toEqual(2)
    })

    it('is not finished when it has just been created', function () {
      expect(frame.isFinished()).not.toBe(true)
    })

    it('is finished when a strike is played', function () {
      frame.bowl(10)
      expect(frame.isFinished()).toBe(true)
    })

    it('adds a bowl to update its bowls', function () {
      frame.bowl(5)
      expect(frame.getBowls()).toEqual([5])
    })

    it('can check whether it is a strike', function () {
      frame.bowl(10)
      expect(frame.isStrike()).toBe(true)
    })

    it('can check whether it is a spare', function () {
      frame.bowl(5)
      frame.bowl(5)
      expect(frame.isSpare()).toBe(true)
    })
  })

  describe('Frame score', function () {
    it('sums its bowls when there is no strike or spare', function () {
      frame.bowl(5)
      frame.bowl(2)
      expect(frame.getScore()).toEqual(7)
    })

    it('can never be more than 10 if there is no strike or spare', function () {
      var message = "You can't knock over more than 10 pins!"
      frame.bowl(5)
      expect(function () { frame.bowl(6) }).toThrow(message)
    })

    it('can calculate a spare bonus', function () {
      frame.bowl(5)
      frame.bowl(5)
      nextFrame.bowl(5)
      expect(frame.getScore(nextFrame)).toEqual(15)
    })

    it('spare bonus will be 5 when next frame first roll is 5', function () {
      nextFrame.bowl(5)
      expect(frame._spareBonus(nextFrame)).toEqual(5)
    })

    it('can calculate a strike bonus', function () {
      frame.bowl(10)
      nextFrame.bowl(7)
      expect(frame.getScore(nextFrame)).toEqual(17)
    })

    it('strike bonus will be 20 when next 2 frames are strikes', function () {
      frame.bowl(10)
      nextFrame.bowl(10)
      nextNextFrame.bowl(10)
      expect(frame._strikeBonus(nextFrame, nextNextFrame)).toEqual(20)
    })
  })
})
