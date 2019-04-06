describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("returns the frame's rolls", function() {
    expect(frame.getFrameRolls()).toEqual([]);
  });

  it("adds a roll to the Frame roll data structure", function() {
    frame.roll(0);
    expect(frame.getFrameRolls()).toEqual([0]);
  });
});
