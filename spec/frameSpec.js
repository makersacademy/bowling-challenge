describe('Frame', function() {

  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it('stores the results of multiple completed frames', function() {
    frame.receivePins(5);
    frame.receivePins(4);
    frame.receivePins(2);
    frame.receivePins(3);
    expect(frame.frames).toEqual([[5, 4], [2, 3]])
  })

  describe('#getFrameResults', function() {

    it('returns the results of frames', function() {
      frame.receivePins(5);
      frame.receivePins(4);
      frame.receivePins(2);
      frame.receivePins(3);
      expect(frame.getFrameResults()).toEqual([[5,4],[2,3]])
    });

  })
});
