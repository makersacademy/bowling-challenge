describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1)
  })

  describe("when frame is created", function() {
    it("has a first roll score of 1", function() {
      expect(frame.firstRollScore()).toEqual(1)
    })

    it("has a second roll score of null", function() {
      expect(frame._secondRoll).toEqual(null)
    })

    it("is a incomplete frame", function() {
      expect(frame.isComplete()).toBeFalsy()
    })

    it("has a first and second roll score of 1", function() {
      expect(frame.firstAndSecondRollScore()).toEqual(1)
    })
  })

  describe("when second roll of frame", function() {
    it("has a second roll score of 1", function() {
      frame.addSecondRoll(1)
      expect(frame._secondRoll).toEqual(1)
    })

    it("is a complete frame", function() {
      frame.addSecondRoll(1)
      expect(frame.isComplete()).toBeTruthy()
    })

    it("has a first and second roll score of 2", function() {
      frame.addSecondRoll(1)
      expect(frame.firstAndSecondRollScore()).toEqual(2)
    })
  })

})
