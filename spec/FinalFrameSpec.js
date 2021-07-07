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

  it("should update the value of ball one", function() {
    finalFrame.updateBallOne(4)
    expect(finalFrame.showBallOne()).toEqual(4);
  });

  it("should update the value of ball two", function() {
    finalFrame.updateBallTwo(6)
    expect(finalFrame.showBallTwo()).toEqual(6);
  });

  it("should update the value of bonus", function() {
    finalFrame.updateBonus(7)
    expect(finalFrame.showBonus()).toEqual(7);
  });

  it("should calculate the total points of the frame", function() {
    finalFrame.updateBallOne(7);
    finalFrame.updateBallTwo(2);
    finalFrame.updateBonus(7);
    finalFrame.calculateTotalPoints();
    expect(finalFrame._totalPoints).toEqual(16);
  });

  it("should not be possible to input a ball two value which will total over 10 when added to ball one", function() {
    finalFrame.updateBallOne(7);
    expect(function() {finalFrame.updateBallTwo(7);} ).toThrow(new Error("There are not enough pins left standing! Check your input."));
  });

  it("should not be possible to input a ball two value which will total over 10 when added to ball one unless ball one is a strike", function() {
    finalFrame.updateBallOne(10);
    finalFrame.updateBallTwo(2);
    finalFrame.updateBonus(7);
    finalFrame.calculateTotalPoints();
    expect(finalFrame._totalPoints).toEqual(19);
  });
});
