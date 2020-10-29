describe("Frame", function (){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("add bowls to the frame score", function() {
    frame.rollOne(4);
    frame.rollOne(4);
    expect(frame.frameScores()).toEqual(8);
  });
});