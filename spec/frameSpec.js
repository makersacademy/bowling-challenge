describe("Frame", function() {
  var game;

  beforeEach(function(){
    frame = new Frame();
  });

  it("should return the number of pins down at the first roll", function(){
    frame.appendNumberPinsDown([5])
    expect(frame.addTotalFramePoints()).toEqual(5)
  });
});
