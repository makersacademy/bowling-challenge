describe ('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame()
    secondFrame = new Frame()
    thirdFrame = new Frame()
  })

  describe('A frame', function () {
    it('should have a score', function () {
      expect(frame.getScore()).toEqual(0)
      console.log(frame.getScore())
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
    it('sums its bowls when there is no strike or spare', function () {
      frame.addBowl(5)
      frame.addBowl(2)
      expect(frame.getScore()).toEqual(7)
    })

    it('can calculate a spare bonus', function () {
      frame.addBowl(5)
      frame.addBowl(5)
      secondFrame.addBowl(5)
      expect(frame.getScore(secondFrame)).toEqual(15)
    })

    it('spare bonus will be 5 when next frame first roll is 5', function () {
      secondFrame.addBowl(5)
      expect(frame._spareBonus(secondFrame)).toEqual(5)
    })

    it('can calculate a strike bonus', function () {
      frame.addBowl(10)
      secondFrame.addBowl(7)
      expect(frame.getScore(secondFrame)).toEqual(17)
    })

    it('strike bonus will be 20 when next 2 frames are strikes', function () {
      secondFrame.addBowl(10)
      thirdFrame.addBowl(10)
      expect(frame._strikeBonus(secondFrame, thirdFrame)).toEqual(20)
    })
  })
})
