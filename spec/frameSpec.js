/* eslint-disable no-undef */
describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("returns the frame rolls in the form of an array", function() {
    expect(frame.frameRolls).toEqual([]);
  });

  it("adds a roll to the frame rolls container", function() {
    frame.addRoll(5);
    expect(frame.frameRolls).toEqual([5]);
  });

  it("accepts only 1 roll if first roll was a strike", function() {
    frame.addRoll(10);
    expect(frame.frameRolls).toEqual([10]);
    expect(frame.isStrike).toBe(true);
    expect(frame.isStrike).not.toBe(false);
    expect(function() {
      frame.addRoll(4);
    }).toThrowError(
      "A frame with a strike does not accept a 2nd roll in this frame"
    );
  });

  it("accepts 2 rolls if first roll was not a strike", function() {
    frame.addRoll(4);
    frame.addRoll(4);
    expect(frame.frameRolls).toEqual([4, 4]);
    expect(function() {
      frame.addRoll(2);
    }).toThrowError("Frame is complete - no more rolls allowed");
  });

  it("marks the frame a spare if frame total is 10 (all pins down)", function() {
    frame.addRoll(4);
    frame.addRoll(6);
    expect(frame.isSpare).toBe(true);
    expect(frame.frameRolls).toEqual([4, 6]);
  });

  it("can reset the frame once it is complete", function() {
    frame.addRoll(4);
    frame.addRoll(4);
    frame.reset();
    expect(frame.frameRolls).toEqual([]);
    frame.addRoll(4);
    frame.addRoll(4);
    expect(frame.frameRolls).toEqual([4, 4]);
  });
});
