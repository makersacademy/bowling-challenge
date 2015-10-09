describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  it("can receive the first roll and records score", function() {
    frame.receiveRoll(1);
    expect(frame.frameRolls[0]).toEqual(1);
  });

  it("can receive a second hit and record the score", function() {
    frame.receiveRoll(1);
    frame.receiveRoll(2);
    expect(frame.frameRolls[1]).toEqual(2);
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

  it("should not be able to receive a roll of more than ten", function() {
    expect(function(){frame.receiveRoll(11);}).toThrow("Must be a number between 0 and 10");
  });

  it("should not be able to receive two rolls adding up to more than ten", function() {
    frame.receiveRoll(3);
    expect(function(){frame.receiveRoll(8);}).toThrow("Too many pins");
  });

  it("should not be a able to receive a number lower than 0", function() {
    expect(function(){frame.receiveRoll(-1);}).toThrow("Must be a number between 0 and 10");
  });

  it("should not be able to receive anything other than a number", function() {
    expect(function(){frame.receiveRoll("a");}).toThrow("Must be a number between 0 and 10");
  });

});