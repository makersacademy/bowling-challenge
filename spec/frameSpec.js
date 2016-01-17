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

  describe('#getFrameScores', function() {

    it('returns the results of frames', function() {
      frame.receivePins(5);
      frame.receivePins(4);
      frame.receivePins(2);
      frame.receivePins(3);
      expect(frame.getFrameScores()).toEqual([[9],[5]])
    });

    it('returns correct score for strike if next f has 2 balls', function() {
      frame.receivePins(10);
      frame.receivePins(4);
      frame.receivePins(3);
      expect(frame.getFrameScores()).toEqual([[17], [7]])
    });

    it('returns correct score for strike if next f is strike', function() {
      frame.receivePins(10);
      frame.receivePins(10);
      frame.receivePins(5);
      expect(frame.getFrameScores()).toEqual([[25]])
    });

  })

  describe('#isTooManyPinsInOneFrame', function() {

    it('returns true if more than 10 pins in 2 ball frame', function() {
      frame.receivePins(9);
      expect(frame.isTooManyPinsInOneFrame(3)).toBe(true)
    });

  })

  describe('#totalScores', function() {
    it('returns the total of all complete frames', function() {
      frame.receivePins(5);
      frame.receivePins(4);
      frame.receivePins(2);
      frame.receivePins(3);
      expect(frame.totalScore()).toEqual(14)
    });
  });

});
