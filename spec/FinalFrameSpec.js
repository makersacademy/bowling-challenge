describe("FinalFrame", function() {

  var finalFrame;

  beforeEach(function() {
    finalFrame = new FinalFrame();
  })

  it("should start with total points 0", function() {
    expect(finalFrame.showTotalPoints()).toEqual(0);
  });

  it("should start with ball one equalling null", function() {
    expect(finalFrame.showBallOne()).toEqual(null);
  });

  it("should start with ball two equalling null", function() {
    expect(finalFrame.showBallTwo()).toEqual(null);
  });

  it("should start with bonus equalling null", function() {
    expect(finalFrame.showBonus()).toEqual(null);
  });
});
