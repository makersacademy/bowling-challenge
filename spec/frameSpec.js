describe ('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
});

  it ('roll adds to frame score', function() {
    frame.roll(5);
    expect(frame.calcScore()).toEqual(5);
  })
})
