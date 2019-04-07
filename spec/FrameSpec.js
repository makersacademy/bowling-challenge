describe('Frame', function() {
  var frame

  it('returns scores in array', function() {
    frame = new Frame(2,3);
    expect(frame.turn).toEqual({ firstTry: 2, secondTry: 3 });
  })
});
