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
});
