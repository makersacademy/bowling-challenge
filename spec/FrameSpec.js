describe('Frame', () => {
  beforeEach(() => {
    frame = new Frame();
  });

  describe('constructor', () => {
    it('has an empty score array', () => {
      expect(frame.score).toHaveSize(0);
    });

    it('has a spare bonus score of 0', () => {
      expect(frame.bonus).toEqual(0);
    });
  });

  describe('play', () => {
    it('calls roll function when score array is empty', () => {
      frame.play(6);
      expect(frame.score).toContain(6);
    });

    it('calls roll function and adds plus 1 to bonus when score is empty ', () => {
      frame.play(10);
      expect(frame.score).toContain(10);
      expect(frame.bonus).toEqual(1);
    });

    it('calls roll function and appends second pin value to score', () => {
      frame.roll(3);
      frame.play(6);
      expect(frame.score).toEqual([3, 6]);
    });

    it('calls roll function, adds plus 1 to bonus and appends second pin value to score ', () => {
      frame.roll(4);
      frame.play(6);
      expect(frame.score).toEqual([4, 6]);
      expect(frame.bonus).toEqual(1);
    });
  });

  describe('roll', () => {
    it('takes knocked down pins as argument & pushes it into score array', () => {
      frame.roll(5);
      expect(frame.score).toContain(5);
    });
  });

  describe('isPerfectStrike', () => {
    it('returns true when kocking down all 10 pins in first round', () => {
      expect(frame.isPerfectStrike(10)).toBe(true);
    });
  });

  describe('isStrike', () => {
    it('returns true when kocking down all 10 pins in 2nd round', () => {
      frame.roll(4);
      expect(frame.isStrike(6)).toBe(true);
    });
  });
});
