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
})