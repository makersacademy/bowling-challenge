describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should start with total points 0", function() {
    expect(frame.showTotalPoints()).toEqual(0);
  });

  it("should start with ball one equalling 0", function() {
    expect(frame.showBallOne()).toEqual(0);
  });

  it("should start with ball two equalling 0", function() {
    expect(frame.showBallTwo()).toEqual(0);
  });

  it("should update the value of ball one", function() {
    frame.updateBallOne(4)
    expect(frame.showBallOne()).toEqual(4);
  });

  it("should update the value of ball two", function() {
    frame.updateBallTwo(6)
    expect(frame.showBallTwo()).toEqual(6);
  });

  it("should calculate the total points of the frame", function() {
    frame.updateBallOne(7);
    frame.updateBallTwo(2);
    frame.calculateTotalPoints();
    expect(frame._totalPoints).toEqual(9);
  });

  it("should not be possible to input a ball two value which will total over 10 when added to ball one", function() {
    frame.updateBallOne(7);
    expect(function() {frame.updateBallTwo(7);} ).toThrow(new Error("There are not enough pins left standing! Check your input."));
  });

  it("should start with bonus of 0", function() {
    expect(frame.showBonus()).toEqual(0);
  });

  it("should update the bonus score", function() {
    frame.addBonusScore(6);
    expect(frame.showBonus()).toEqual(6);
  });

});
