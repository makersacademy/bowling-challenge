describe("Bowling", function() {
  var bowling;
  var scorecard = jasmine.createSpyObj("scorecard",["addRoll", "currentScore", "currentFrame", "currentFrameNum"])

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
      bowling.roll(5)
      expect(scorecard.addRoll).toHaveBeenCalledWith(5)
    });
  });

  describe("showCurrentScore", function() {
    it("should retrieve current score from scorecard", function() {
      scorecard.currentScore.and.returnValue(35)
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
