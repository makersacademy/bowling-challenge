describe("Frame", function (){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("adds bowls to the frame score", function() {
    frame.rollOne(4);
    expect(frame.frameScore).toEqual(4);
  });

  it("add bowls to the frame score", function() {
    frame.rollOne(4);
    frame.rollOne(4);
    expect(frame.frameScore).toEqual(8);
  });
});