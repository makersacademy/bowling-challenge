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

  describe('roll', () => {
    it('takes knocked down pins as argument & pushes it into score array', () => {
      frame.roll(5);
      expect(frame.score).toContain(5);
    });

    it('is a perfect strike when kocking down all 10 pins in first round', () => {
      expect(frame.isPerfectScore(10)).toBe(true);
    });
  });
});
