describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("scoring in the game", function() {
    it("should be able to return the score", function() {
      expect(frame.getScore()).toEqual(0);
    });

    it("should be able to accept roll and return score", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(3);
      expect(frame.getScore()).toEqual(3);
    });

    it("returns true for a strike", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it("returns true for a spare", function() {
      expect(frame.getScore()).toEqual(0);
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    });

  });

  it("return if another bowl can be taken", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(5);
    expect(frame.isGetAnotherBowl()).toEqual(true);
  });  

  it("should return true when frame is finished", function() {
    spyOn(frame, 'isGetAnotherBowl').and.returnValue(false);
    expect(frame.isFinished()).toEqual(true);
  });

  // it("should return true when it is the final frame", function() {
  //   var scorecard = jasmine.createSpyObj('scorecard', ['frames']);
  //   scorecard.frames = [];
  //   for (i = 0; i < 10; i ++) {
  //     frame.addFrame(frame);
  //   }
  //   expect(frame.isFinalFrame()).toEqual(true);
  // });
});
