describe("Frame", function(), {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe("bowl", function() {
    it("should add the score bowled to the frame's score", function() {
      frame.bowl(6);
      expect(frame.score).toEqual(6);
    })
  })

})
