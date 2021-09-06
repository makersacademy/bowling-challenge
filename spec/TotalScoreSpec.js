describe('TotalScore', () => {
  beforeEach(() => {
    score = new TotalScore();
  });

  describe('constructor', () => {
    it('has an empty total score array', () => {
      expect(score.totalScore).toHaveSize(0);
    });

    it('has a frame count starting at 0', () => {
      expect(score.frameCount).toEqual(0);
    });
  });
});
