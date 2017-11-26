describe("Frame", function() {

  beforeEach(function() {
    rolls = jasmine.createSpy("rolls");
    frame = new Frame(rolls);
  });

  describe("#new", function() {
    it("creates a new frame object", function() {
      expect(frame).toEqual(jasmine.any(Frame));
    });
    it("includes a property rolls",function() {
      expect(frame.getRolls()).toEqual(rolls);
    });
  });

});
