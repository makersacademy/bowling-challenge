describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("knows when a frame is in progress", function() {
    expect(frame.inProgress).toBe(true);
  });

  it("can register a roll", function() {
    frame.registerRoll();

    expect(frame.rollCount).toEqual(1);
  });

  it("knows how many rolls there have been", function() {
    frame.registerRoll();
    frame.registerRoll();

    expect(frame.rollCount).toEqual(2);
  });

  it("can register the number of pins left", function() {
    frame.registerRoll(5);

    expect(frame.pinsLeft).toEqual(5);
  });

  it("knows when there has been a strike", function() {
    frame.registerRoll(10);

    expect(frame.checkStrike()).toBe(true);
  });

  it("knows when there has been a spare", function() {
    frame.registerRoll(5);
    frame.registerRoll(5);

    expect(frame.checkSpare()).toBe(true);
  });

});
