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

    it('calculates its score based on its bowls', function () {
      frame.addBowl(5)
      frame.addBowl(2)
      expect(frame.getScore()).toEqual(7)
    })

    it('is finished when two bowls are played', function () {
      frame.addBowl(5)
      frame.addBowl(2)
      expect(frame.isFinished()).toBe(true)
    })
  })

  describe('Adding a bowl', function () {
    it("updates the frame's bowls", function () {
      frame.addBowl(5)
      expect(frame.getBowls()).toEqual([5])
    })
  })
})
