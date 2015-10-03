describe("Frame", function() {

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

  it("can not receive a hit of more than ten pins in a roll", function() {
    expect(function(){frame.receiveRoll(11);}).toThrow("Can not hit more than ten pins");
  });

  it("can not receive a hit of more than ten pins in a frame", function() {
    frame.receiveRoll(9);
    expect(function(){frame.receiveRoll(2);}).toThrow("Can not hit more than ten pins");
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






  // it("can reveive a second roll and records score", function() {
  //   frame.receiveRoll(1);
  //   frame.receiveRoll(1);
  //   expect(frame.runningFrameScore).toEqual(2);
  // });

  // it()


});