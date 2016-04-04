describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should record the players score", function() {
    frame.record(1);
    expect(frame.total()).toEqual(1);
  });

  describe("closing off a frame", function() {
    it("happens after a second bowl, when not a spare", function() {
      frame.record(1);
      expect(frame.isComplete()).toBe(false);
      frame.record(1);
      expect(frame.isComplete()).toBe(true);
    });

    it("complete after strike, followed by non-spare", function() {
      frame.record(10);
      frame.record(1);
      expect(frame.isComplete()).toBe(false);
      frame.record(1);
      expect(frame.isComplete()).toBe(true);
    });

    it("complete after spare and 1 ball", function() {
      frame.record(5);
      frame.record(5);
      expect(frame.isComplete()).toBe(false);
      frame.record(1);
      expect(frame.isComplete()).toBe(true);
    });

    it("complete after three strikes", function() {
      frame.record(10);
      frame.record(10);
      expect(frame.isComplete()).toBe(false);
      frame.record(10);
      expect(frame.isComplete()).toBe(true);
    });
  });

  it("frames to be carried over for strike calculations", function() {
    frame.record(10);
    frame.record(10);
    frame.record(1);
    frame.record(1);
    expect(frame.carryOver()).toEqual([[10,0],[1,1]]);
  });
});
