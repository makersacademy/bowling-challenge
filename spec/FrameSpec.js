describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  it("can receive the first roll and records score", function() {
    frame.receiveRoll(1);
    expect(frame.firstRoll).toEqual(1);
  });

  it("can receive a second hit and record the score", function() {
    frame.receiveRoll(1);
    frame.receiveRoll(2);
    expect(frame.secondRoll).toEqual(2);
  });

  it("can return the total score for the frame", function() {
    frame.receiveRoll(1);
    frame.receiveRoll(2);
    expect(frame.totalScore).toEqual(3);
  });

  it("can receive and record a strike", function() {
    frame.receiveRoll(10);
    expect(frame.strike).toBe(true);
  });

  it("can receive and record a spare", function() {
    frame.receiveRoll(9);
    frame.receiveRoll(1);
    expect(frame.strike).toBe(false);
    expect(frame.spare).toBe(true);
  });


});