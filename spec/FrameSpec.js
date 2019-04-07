describe('Frame', function() {
  var frame

  it('returns scores in array', function() {
    frame = new Frame(2,3);
    expect(frame.turn).toEqual([2,3]);
    // expect(frame.firstTry).toEqual(2);
    // expect(frame.secondTry).toEqual(3);
  })
});
