describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should start with total points 0", function() {
    expect(frame.showTotalPoints()).toEqual(0);
  });

});
