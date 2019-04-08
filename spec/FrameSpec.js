describe("Frame", function() {
  var frame;
  var scorecard;

  describe("when user throws a simple 2 roll frame", function() {
    beforeEach(function() {
      frame = new Frame;
      scorecard = jasmine.createSpyObj(
        'scorecard', [
          'captureFrame',
          'isPreviousFrameSpare',
          'isPreviousFrameStrike',
          'isTwoFramesPreviousStrike'
        ]
      );
      frame.enterFirstRollScore(6, scorecard);
    });
    
    it("captures score of first roll", function() {
      expect(frame.firstRollScore).toEqual(6);
    });
  
    it("adds first roll score to frame total", function() {
      expect(frame.calculateTotalScore()).toEqual(6);
    });
  
    it("captures score of second roll", function() {
      frame.enterSecondRollScore(2, scorecard);
      expect(frame.secondRollScore).toEqual(2);
    });
  
    it("adds second roll score to frame total", function() {
      frame.enterSecondRollScore(2, scorecard);
      expect(frame.calculateTotalScore()).toEqual(8);
    });

    it("adds frame to scorecard when started", function() {
      expect(scorecard.captureFrame).toHaveBeenCalledWith(frame);
    });
  });
  
  describe("when user enters an invalid score", function() {
    beforeEach(function() {
      frame = new Frame;
      scorecard = jasmine.createSpyObj(
        'scorecard', [
          'captureFrame',
          'isPreviousFrameSpare',
          'isPreviousFrameStrike',
          'isTwoFramesPreviousStrike'
        ]
      );
    });
    
    it("throws error if 11 is entered for first frame roll", function() {
      expect(function(){ frame.enterFirstRollScore(11) }).toThrow(
        new Error("A maximum of 10 can be scored per frame.")
      );
    });

    it("throws error if 11 is entered for whole frame score", function() {
      frame.enterFirstRollScore(6, scorecard);
      expect(function(){ frame.enterSecondRollScore(5, scorecard) }).toThrow(
        new Error("A maximum of 10 can be scored per frame.")
      );
    });
  });

  describe("when calculating bonus scores", function() {
    beforeEach(function() {
      scorecard = jasmine.createSpyObj(
        'scorecard', [
          'captureFrame',
          'isPreviousFrameSpare',
          'isPreviousFrameStrike',
          'isTwoFramesPreviousStrike'
        ]
      );
      frame = new Frame;
    });
    
    it("checks if previous frame scored a spare", function() {
      frame.enterFirstRollScore(5, scorecard);
      expect(scorecard.isPreviousFrameSpare).toHaveBeenCalledWith(frame);
    });

    it("flags frame as spare when spare is scored", function() {
      frame.enterFirstRollScore(6, scorecard);
      frame.enterSecondRollScore(4, scorecard);
      expect(frame.spareFlag).toBe(true);
    });

    it("adds bonus to spare frame total score", function() {
      frame2 = new Frame;
      scorecard.frames = [frame, frame2];
      frame.enterFirstRollScore(6, scorecard);
      frame.enterSecondRollScore(4, scorecard);
      scorecard.isPreviousFrameSpare.and.returnValue(true);
      frame2.enterFirstRollScore(5, scorecard);
      expect(frame.bonusScore).toEqual(5);
      expect(frame.totalScore).toEqual(15);
    });

    describe("when calculating strike bonus", function() {
      it("checks if previous frame scored a strike, on second roll", function() {
        frame.enterFirstRollScore(5, scorecard);
        frame.enterSecondRollScore(4, scorecard);
        expect(scorecard.isPreviousFrameStrike).toHaveBeenCalledWith(frame);
      });

      it("flags frame as strike when strike is scored", function() {
        frame.enterFirstRollScore(10, scorecard);
        expect(frame.strikeFlag).toBe(true);
      });
  
      it("adds both current frame roll scores to previous frame bonus", function() {
        frame2 = new Frame;
        scorecard.frames = [frame, frame2];
        frame.enterFirstRollScore(10, scorecard);
        frame2.enterFirstRollScore(5, scorecard);
        scorecard.isPreviousFrameStrike.and.returnValue(true);
        frame2.enterSecondRollScore(4, scorecard);
        expect(frame.bonusScore).toEqual(9)
      });

      it("checks if previous 2 frames scored a strike, on first roll", function() {
        frame.enterFirstRollScore(10, scorecard);
        frame2 = new Frame;
        frame2.enterFirstRollScore(10, scorecard);
        frame3 = new Frame;
        scorecard.isPreviousFrameStrike.and.returnValue(true);
        frame3.enterFirstRollScore(3, scorecard);
        expect(scorecard.isTwoFramesPreviousStrike).toHaveBeenCalledWith(frame3);
      });
    });
  });
});