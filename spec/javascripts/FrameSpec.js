describe('Frame', function(){
  it("is over after 2 rolls", function(){
    var frame = new Frame();
    expect(frame.isOver()).toEqual(false);
    frame.roll(0);
    frame.roll(0);
    expect(frame.isOver()).toEqual(true);
  });

  it("strike ends the frame", function(){
    var frame = new Frame();
    expect(frame.isOver()).toEqual(false);
    frame.roll(10);
    expect(frame.isOver()).toEqual(true);
  });
});
