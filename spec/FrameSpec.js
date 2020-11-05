describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame
  })

  describe("#pins", function () {
    it("can store two rolls and return their total", function () {
      frame.roll(3)
      frame.roll(4)
      expect(frame.pins()).toEqual(7)
    })
  })

  describe("#isStrike", function () {
    it("knows if it was a strike", function () {
      frame.roll(10)
      expect(frame.isStrike()).toEqual(true)
    })
    it("knows if it wasn't a strike", function () {
      frame.roll(3)
      frame.roll(3)
      expect(frame.isStrike()).toEqual(false)
    })
  })

  describe("#isSpare", function () {
    it("Knows if it was a spare", function () {
      frame.roll(7)
      frame.roll(3)
      expect(frame.isSpare()).toEqual(true)
    })

    it("Knows if it wasn't a spare", function () {
      frame.roll(3)
      frame.roll(4)
      expect(frame.isSpare()).toEqual(false)
    })

    it("Knows a strike isn't a spare", function () {
      frame.roll(10)
      expect(frame.isSpare()).toEqual(false)
    })
  })
})