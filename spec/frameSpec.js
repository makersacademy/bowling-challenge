describe("Frame", function() {

  beforeEach(function() {
    myFrame = new Frame();
  });

  describe("#currentRollNumber", function() {
    it("Returns 1 on first roll", function() {
      expect(myFrame.currentRollNumber()).toEqual(1);
    });

    it("Returns 2 on second roll", function() {
      myFrame.inputRollScore(1);
      expect(myFrame.currentRollNumber()).toEqual(2);
    });

    it("Returns 3 on third roll", function() {
      myFrame.inputRollScore(1);
      myFrame.inputRollScore(1);
      expect(myFrame.currentRollNumber()).toEqual(3);
    });
  });

  it("#inputRollScore inputs a roll and advances the current roll", function() {
    myFrame.inputRollScore(4);
    expect(myFrame.currentRollNumber()).toEqual(2);
    expect(myFrame.pinsKnocked()).toEqual(4);
  });

  describe("#isStrike", function() {
    it("Returns false if not a strike", function() {
      myFrame.inputRollScore(4);
      myFrame.inputRollScore(4);
      expect(myFrame.isStrike()).toEqual(false);
    });

    it("Returns true if a strike", function() {
      myFrame.inputRollScore(10);
      expect(myFrame.isStrike()).toEqual(true);
    });
  });

  describe("#isSpare", function() {
    it("Returns false if not a spare or strike", function() {
      myFrame.inputRollScore(4);
      myFrame.inputRollScore(4);
      expect(myFrame.isSpare()).toEqual(false);
    });

    it("Returns false if a strike", function() {
      myFrame.inputRollScore(10);
      expect(myFrame.isSpare()).toEqual(false);
    });

    it("Returns true if a spare", function() {
      myFrame.inputRollScore(3);
      myFrame.inputRollScore(7);
      expect(myFrame.isSpare()).toEqual(true);
    });
  });

  it("#pointsForStrike returns the sum of the first two rolls", function() {
    myFrame.inputRollScore(3);
    myFrame.inputRollScore(2);
    myFrame.inputRollScore(1);
    expect(myFrame.pointsForStrike()).toEqual(5);
  });

  it("#pointsForSpare returns the first roll only", function() {
    myFrame.inputRollScore(3);
    myFrame.inputRollScore(2);
    myFrame.inputRollScore(1);
    expect(myFrame.pointsForSpare()).toEqual(3);
  });

  it("#addScore correctly adds the points", function() {
    myFrame.addScore(10);
    expect(myFrame.getTotalScore()).toEqual(10);
  });
})
