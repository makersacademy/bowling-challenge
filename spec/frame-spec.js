describe ('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame()
  })

  describe('A frame', function () {
    it('should have a score', function () {
      expect(frame.getScore()).toEqual(0)
    })

    it('can store bowls', function () {
      expect(frame.getBowls()).toEqual([])
    })

    it('is finished when two bowls are played', function () {
      frame.addBowl(5)
      frame.addBowl(2)
      expect(frame.isFinished()).toBe(true)
    })

    it('is not finished when it is started', function () {
      expect(frame.isFinished()).not.toBe(true)
    })

    it('is finished when a strike is played', function () {
      frame.addBowl(10)
      expect(frame.isFinished()).toBe(true)
    })

    it("adds a bowl to update its bowls", function () {
      frame.addBowl(5)
      expect(frame.getBowls()).toEqual([5])
    })

    it('can check whether it is a strike', function () {
      frame.addBowl(10)
      expect(frame.isAStrike()).toBe(true)
    })

    it('can check whether it is a spare', function () {
      frame.addBowl(5)
      frame.addBowl(5)
      expect(frame.isASpare()).toBe(true)
    })
  })

  describe('Frame score', function () {
    beforeEach(function () {
      secondFrame = new Frame()
      thirdFrame = new Frame()
    })

    it('sums its bowls when there is no strike or spare', function () {
      frame.addBowl(5)
      frame.addBowl(2)
      expect(frame.getScore()).toEqual(7)
    })

    it('can calculate a spare bonus', function () {
      frame.addBowl(5)
      frame.addBowl(5)
      secondFrame.addBowl(5)
      expect(frame.getScore()).toEqual(15)
    })
  })
})
