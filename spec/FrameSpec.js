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
});
