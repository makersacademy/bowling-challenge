describe("Frame", function() {
  var frame;
  var scorecard;
  scorecard = jasmine.createSpyObj('scorecard', ['captureFrame'])

  describe("when user throws a simple 2 roll frame", function() {
    beforeEach(function() {
      frame = new Frame();
      frame.enterFirstRollScore(6, scorecard);
    });
    
    it("captures score of first roll", function() {
      expect(frame.firstRollScore).toEqual(6);
    });
  
    it("adds first roll score to frame total", function() {
      expect(frame.calculateTotalScore()).toEqual(6);
    });
  
    it("captures score of second roll", function() {
      frame.enterSecondRollScore(2);
      expect(frame.secondRollScore).toEqual(2);
    });
  
    it("adds second roll score to frame total", function() {
      frame.enterSecondRollScore(2);
      expect(frame.calculateTotalScore()).toEqual(8);
    });

    it("adds frame to scorecard when started", function() {
      expect(scorecard.captureFrame).toHaveBeenCalledWith(frame);
    });
  });
  
  describe("when user enters an invalid score", function() {
    beforeEach(function() {
      frame = new Frame();
    });
    
    it("throws error if 11 is entered for first frame roll", function() {
      expect(function(){ frame.enterFirstRollScore(11) }).toThrow(
        new Error("A maximum of 10 can be scored per frame.")
      );
    });

    it("throws error if 11 is entered for whole frame score", function() {
      frame.enterFirstRollScore(6);
      expect(function(){ frame.enterSecondRollScore(5) }).toThrow(
        new Error("A maximum of 10 can be scored per frame.")
      );
    });
  });
});