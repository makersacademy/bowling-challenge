describe("Frame", function() {


  describe("keeps track of pins", function() {
    it("has ten pins at the start", function() {
      frame = new Frame;
      expect(frame.pins).toBe(10);
    });

    it("knowing how many pins have fallen", function() {
      frame = new Frame(2, 3);
      frame.hits()
      expect(frame.pins).toBe(5);
    });

    it("knows if it's a spare", function() {
      frame = new Frame(5, 5);
      frame.hits();
      expect(frame.spare).toBe(true)
    });

    it("knows if it's a strike", function() {
      frame = new Frame(10, 0);
      frame.hits()
      expect(frame.strike).toBe(true)
    });

    it("cannot be a strike and a spare", function() {
      frame = new Frame(10, 0);
      frame.hits()
      expect(frame.spare).toBe(false)
    });
  });

  describe("scoring", function() {
    it("knows its score", function() {
      frame = new Frame(2, 3);
      frame.hits()
      expect(frame.score).toBe(5);
    });

  });
});