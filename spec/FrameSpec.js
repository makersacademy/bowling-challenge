describe("Frame", function() {

  var pins;

  beforeEach( function() {
  frame = new Frame();
});

  it("each frame should have 10 pins", function() {
    expect(frame.pins).toEqual(10);
  });

})
