describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame([3,5]);
  });

  describe("#new", function() {
    it("creates a new scoresheet object", function() {
      expect(frame).toEqual(jasmine.any(Frame));
    });
    it("includes a property rolls",function() {
      expect(frame.getRolls()).toEqual([3,5]);
    })
  });

});
