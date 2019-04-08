describe('Frame', function() {
  var frame

  it('returns scores in array', function() {
    frame = new Frame(2,3);
    expect(frame.turn).toEqual([2,3]);
  });

  describe('#roundScore', function() {
    it('adds up frame result to score', function() {
      frame = new Frame(2,3);
      frame.roundScore();
      expect(frame.score).toEqual(5)
    });
  });
});
