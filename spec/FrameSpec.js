describe('Frame', function() {
  let frame, round;

  beforeEach(function() {
    frame = new Frame();
    round = jasmine.createSpy('Round');
  });

  it('should have an inital score of 0', function() {
    expect(frame._score).toEqual(0);
  });

  it('should have no rounds played', function() {
    expect(frame._rounds).toEqual([]);
  });

  describe('addRound', function() {
    it('should be able to store a round', function() {
      frame.addRound(round);

      expect(frame._rounds).toEqual([round]);
    });

    it('throws an error if more than three rounds are added to a frame', function() {
      frame.addRound(round);
      frame.addRound(round);
      frame.addRound(round);

      expect(function() {
        frame.addRound(round);
      }).toThrowError('Max number of rounds exceeded');
    });
  });

  describe('score', function() {
    it('returns the score from the current frame', function() {
      // TODO: How to stub this
      frame.addRound(new Round(7));
      frame.addRound(new Round(2));

      expect(frame.score()).toEqual(9);
    });
  });
});
