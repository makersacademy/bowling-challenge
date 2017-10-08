describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should be able to hold the value for a the first bowl", function() {
        frame.firstBowl(4);
        expect(frame.firstBowlScore).toEqual(4);
  });

  it("should hold the value for a second bowl", function() {
        frame.secondBowl(5);
        expect(frame.secondBowlScore).toEqual(5);
  });

  it("should calculate the total score for the turn", function() {
        frame.firstBowl(4);
        frame.secondBowl(5);
        expect(frame.turnTotalScore).toEqual(9);
  });

  it("should know if a strike has been struck", function() {
        frame.firstBowl(10);
        expect(frame.wasStrike).toBe(true);
        expect(frame.turnTotalScore).toBe(10);
  });

  it("should know if a spare has been bowled", function() {
        frame.firstBowl(4);
        frame.secondBowl(6);
        expect(frame.wasStrike).toBe(false);
        expect(frame.wasSpare).toBe(true);
  });

  // it("doesn't accept a second bowl score if there was a strike on the first bowl", function() {
  //       frame.firstBowl(10);
  //       expect( function(){ frame.secondBowl(5); } ).toThrow(new Error("You scored a strike on your first bowl!"));
  // });

  it("checks if there was a spare on the previous bowl", function() {
        frame.firstBowl(3);
        frame.secondBowl(7);
        expect(frame.turnTotalScore).toEqual(10);
  });

  it("increments after each frame is complete", function() {
        frame.firstBowl(7);
        frame.secondBowl(2);
        expect(frame.frameNumber).toEqual(2);
  });

  it("increments after each frame is complete when scoring strike", function() {
        frame.firstBowl(10);
        expect(frame.frameNumber).toEqual(2);
  });

  it("adds to the score after each frame", function() {
      frame.firstBowl(6);
      frame.secondBowl(3);
      frame.firstBowl(6);
      frame.secondBowl(3);
      expect(frame.frameNumber).toEqual(3);
      expect(frame.score).toEqual(18);
  });
});
