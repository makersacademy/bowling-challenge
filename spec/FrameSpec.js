describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should record the players score", function() {
    frame.record(1);
    expect(frame.total()).toContain(1);
  });

  describe("closing off a frame", function() {
    it("starts off not complete", function() {
      expect(frame.isComplete()).toBe(false);
    });

    it("happens after a second bowl", function() {
      frame.record(1);
      frame.record(1);
      expect(frame.isComplete()).toBe(true);
    });

    it("happens after a strike on first bowl", function() {
      frame.record(10);
      expect(frame.isComplete()).toBe(true);
    });
  });
});
