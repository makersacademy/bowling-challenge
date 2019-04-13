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

  describe("Tenth frame", function() {
    var scorecard;
    var frame1;
    var frame2;
    var frame3;
    var frame4;
    var frame5;
    var frame6;
    var frame7;
    var frame8;
    var frame9;
    
    beforeEach(function() {
      scorecard = jasmine.createSpyObj(
        'scorecard', [
          'captureFrame',
          'isPreviousFrameSpare',
          'isPreviousFrameStrike',
          'isTwoFramesPreviousStrike',
          'calculateTotalScore'
        ]
      );
      frame1 = new Frame;
      frame2 = new Frame;
      frame3 = new Frame;
      frame4 = new Frame;
      frame5 = new Frame;
      frame6 = new Frame;
      frame7 = new Frame;
      frame8 = new Frame;
      frame9 = new Frame;
      scorecard.frames = [];
      scorecard.frames.push(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9);
      frame1.enterFirstRollScore(5, scorecard);
      frame1.enterSecondRollScore(4, scorecard);
      frame2.enterFirstRollScore(2, scorecard);
      frame2.enterSecondRollScore(6, scorecard);
      frame3.enterFirstRollScore(5, scorecard);
      frame3.enterSecondRollScore(4, scorecard);
      frame4.enterFirstRollScore(5, scorecard);
      frame4.enterSecondRollScore(4, scorecard);
      frame5.enterFirstRollScore(5, scorecard);
      frame5.enterSecondRollScore(4, scorecard);
      frame6.enterFirstRollScore(5, scorecard);
      frame6.enterSecondRollScore(4, scorecard);
      frame7.enterFirstRollScore(5, scorecard);
      frame7.enterSecondRollScore(4, scorecard);
      frame8.enterFirstRollScore(5, scorecard);
      frame8.enterSecondRollScore(4, scorecard);
      frame9.enterFirstRollScore(5, scorecard);
      frame9.enterSecondRollScore(4, scorecard);
    });

    it("prevents bonus roll when fewer than 10 frames played", function() {
      expect(function() { frame9.enter10thFirstBonusRollScore(4, scorecard) }).toThrow(new Error(
        "This bonus roll is only available in the 10th frame"
      ));
    });

    it("prevents first bonus roll when spare or strike has not been scored", function() {
      var frame10 = new Frame;
      scorecard.frames.push(frame10);
      frame10.enterFirstRollScore(6, scorecard);
      frame10.enterSecondRollScore(3, scorecard);
      expect(function() { frame10.enter10thFirstBonusRollScore(4, scorecard) }).toThrow(new Error(
        "This bonus roll is only available after 10th frame strike or spare is scored"
      ));
    });

    it("prevents second bonus roll when strike has not been scored", function() {
      var frame10 = new Frame;
      scorecard.frames.push(frame10);
      frame10.enterFirstRollScore(6, scorecard);
      frame10.enterSecondRollScore(4, scorecard);
      expect(function() { frame10.enter10thSecondBonusRollScore(4, scorecard) }).toThrow(new Error(
        "This bonus roll is only available after 10th frame strike is scored"
      ));
    });

    it("adds first bonus roll score to spare bonus", function() {
      var frame10 = new Frame;
      scorecard.frames.push(frame10);
      frame10.enterFirstRollScore(6, scorecard);
      frame10.enterSecondRollScore(4, scorecard);
      frame10.enter10thFirstBonusRollScore(6, scorecard);
      expect(frame10.bonusScore).toEqual(6);
      expect(frame10.totalScore).toEqual(16);
    });

    it("adds second bonus roll score to strike bonus", function() {
      var frame10 = new Frame;
      scorecard.frames.push(frame10);
      frame10.enterFirstRollScore(10, scorecard);
      frame10.enter10thFirstBonusRollScore(10, scorecard);
      frame10.enter10thSecondBonusRollScore(10, scorecard);
      expect(frame10.bonusScore).toEqual(20);
      expect(frame10.totalScore).toEqual(30);
    });
  });
});