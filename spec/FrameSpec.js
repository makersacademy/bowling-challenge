describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("tracks the first turn", function() {
    // spyOn(Math, 'random').and.returnValue(.3)
    frame.play(3);
    expect(frame.currentFrame).toEqual([3])
  });

  it("tracks the second turn", function() {
    frame.play(3);
    frame.play(2);
    expect(frame.metaFrame).toEqual([[3, 2]])
  });

  it("tracks the frame scores", function() {
    frame.play(3);
    frame.play(6);
    frame.play(4);
    frame.play(4);
    expect(frame.metaFrame).toEqual([[3, 6], [4, 4]])
  });

  it("can score a strike", function() {
    frame.play(10);
    expect(frame.strike).toEqual(true)
  });
});
