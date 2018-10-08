describe("Bowling", function() {
  var bowling;
  var scorecard = jasmine.createSpyObj("scorecard",["addRoll", "currentScore", "currentFrame", "currentFrameNum", "frames", "nextRoll"])

  beforeEach(function() {
    bowling = new Bowling(scorecard);
  });

  it("should be able to make a roll", function() {
    expect(typeof bowling.roll).toEqual("function");
  });

  it("should have a scorecard", function() {
    expect(bowling.scorecard).toBeDefined()
  })

  describe("roll", function() {
    it("should add bowl to scorecard", function() {
      scorecard.currentFrame.and.returnValue([null,null])
      bowling.roll(5)
      expect(scorecard.addRoll).toHaveBeenCalledWith(5)
    });
    it("should reject NaN", function() {
      expect(bowling.roll("a")).toEqual("You need to put in a number")
    });
    it("should reject roll bigger than 10", function() {
      expect(bowling.roll(13)).toEqual("You cannot roll more than 10")
    });
    it("should reject frame more than 10", function() {
      scorecard.currentFrame.and.returnValue([8,null])
      expect(bowling.roll(4)).toEqual("A frame cannot be more than 10")
    });
  });

  describe("showFrames", function() {
    it("should retrieve all frames from scorecard",function() {
      var all_frames = jasmine.createSpy("all frames")
      scorecard.frames = all_frames
      expect(bowling.showFrames()).toEqual(all_frames)
    })
  })

  describe("showNextRoll",function() {
    it("should retrieve next roll from scorecard",function() {
      var next_roll = 1
      scorecard.nextRoll.and.returnValue(next_roll)
      expect(bowling.showNextRoll()).toEqual(next_roll)
    })
  })

  describe("showCurrentScore", function() {
    it("should retrieve current score from scorecard", function() {
      var currentScoreMock = scorecard.currentScore()
      expect(bowling.showCurrentScore()).toEqual(currentScoreMock)
    });
  });

  describe("showCurrentFrame", function() {
    it("should retrieve current frame from scorecard", function() {
      scorecard.currentFrame.and.returnValue([3,null])
      var currentFrameMock = scorecard.currentFrame()
      expect(bowling.showCurrentFrame()).toEqual(currentFrameMock)
    });
  });

  describe("showCurrentFrameNum", function() {
    it("should retrieve current frame number from scorecard", function() {
      scorecard.currentFrameNum.and.returnValue(3)
      var currentFrameNumMock = scorecard.currentFrameNum()
      expect(bowling.showCurrentFrameNum()).toEqual(currentFrameNumMock)
    });
  });

});
