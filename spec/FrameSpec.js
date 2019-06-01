describe(Frame, function() {
  frame = new Frame();

  it('receives first bowl', function() {
    expect(frame.firstBowl(6)).toEqual(frame);
  });

  it('receives second bowl', function() {
    expect(frame.secondBowl(3)).toEqual(frame);
  });
});
