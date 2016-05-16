describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with no rolls', function() {
    expect(frame.rollCount()).toEqual(0);
  });

  it('starts with a score of zero', function() {
    expect(frame.total()).toEqual(0);
  });

  describe('adding a score', function() {
    it('adds the score to the total', function() {
      frame.addScore(1);
      expect(frame.total()).toEqual(1);
    });

    it('increases the roll count by 1', function() {
      frame.addScore(1);
      expect(frame.rollCount()).toEqual(1);
    });

    describe('illegal scores', function() {
      it('raises an error on the first roll', function() {
        expect(function() {frame.addScore(11)}).toThrowError('Illegal Score');
      });

      it('raises an error on the second roll', function() {
        frame.addScore(6);
        expect(function() {frame.addScore(5)}).toThrowError('Illegal Score');
      });
    });
  });

  it('knows if it is a strike', function() {
    frame.addScore(10);
    expect(frame.isStrike()).toEqual(true);
  });

    it('knows if it is a spare', function() {
    frame.addScore(9);
    frame.addScore(1);
    expect(frame.isSpare()).toEqual(true);
  });
});
