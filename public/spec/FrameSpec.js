describe('Frame', () => {
  var frame;
  
  it('should create a new frame with input of score as values', () => {
    frame = new Frame(3, 4);
    expect(frame.totalScore()).toEqual(7);
  });
  
  describe('if frame is a strike', () => {
    it('returns true when frame is a strike', () => {
      frame = new Frame(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('returns false when frame is not a strike', () => {
      frame = new Frame(3, 4);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('if frame is a spare', () => {
    it('return true if it is a spare', () => {
      frame = new Frame(4, 6);
      expect(frame.isSpare()).toBe(true);
    });

    it('return false if it is not a spare', () => {
      frame = new Frame(3, 2);
      expect(frame.isSpare()).toBe(false);
    });
  });

  it('returns the total score for the frame with totalScore()', () => {
    frame = new Frame(5,3);
    expect(frame.totalScore()).toEqual(8);
  });
});