describe("Frame", function() {

  var frame = new Frame();

  it('has two rolls', function() {
    expect(frame.firstRoll).toEqual(null);
    expect(frame.secondRoll).toEqual(null);
  })
})
