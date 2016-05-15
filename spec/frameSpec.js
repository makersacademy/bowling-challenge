describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1)
  })

  describe("when frame is created", function() {
    it("has a first roll score of 1", function() {
      expect(frame.firstRollScore()).toEqual(1)
    })
  })

})
