describe("Frame", function() {
  var frame;
  var scorecard;

  describe("when user throws a simple 2 roll frame", function() {
    beforeEach(function() {
      frame = new Frame;
      scorecard = jasmine.createSpyObj('scorecard', ['captureFrame', 'isPreviousFrameSpare']);
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
      frame = new Frame;
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

  describe("when calculating bonus scores", function() {
    it("checks if previous frame scored a spare", function() {
      frame = new Frame;
      scorecard = jasmine.createSpyObj('scorecard', ['captureFrame', 'isPreviousFrameSpare']);
      frame.enterFirstRollScore(5, scorecard);
      expect(scorecard.isPreviousFrameSpare).toHaveBeenCalledWith(frame);
    });

    it("flags frame as spare when spare is scored", function() {
      frame = new Frame;
      frame.enterFirstRollScore(6);
      frame.enterSecondRollScore(4);
      expect(frame.spareFlag).toBe(true);
    });

    it("adds bonus to spare frame total score", function() {
      frame1 = new Frame;
      frame2 = new Frame;
      scorecard = jasmine.createSpyObj('scorecard', ['captureFrame', 'isPreviousFrameSpare']);
      scorecard.frames = [frame1, frame2];
      frame1.enterFirstRollScore(6, scorecard);
      frame1.enterSecondRollScore(4);
      scorecard.isPreviousFrameSpare.and.returnValue(true);
      frame2.enterFirstRollScore(5, scorecard);
      expect(frame1.bonusScore).toEqual(5);
      expect(frame1.totalScore).toEqual(15);
    });
  });
});