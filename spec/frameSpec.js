describe("Frame", function() {
  var game;

  beforeEach(function(){
    frame = new Frame();
  });

  it("should return the number of pins down at the first roll", function(){
    frame.appendNumberPinsDown(5)
    expect(frame.addTotalFramePoints()).toEqual(5)
  });

  it("should return the total points after 2 rolls", function(){
    frame.appendNumberPinsDown(5)
    frame.appendNumberPinsDown(3)
    expect(frame.addTotalFramePoints()).toEqual(8)
  });
});
