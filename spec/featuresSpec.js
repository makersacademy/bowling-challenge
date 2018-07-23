describe('Features', () => {
  describe('a perfect game', () => {
    it('should have a final score of 300', () => {
      scorecard = new Scorecard();
      for(var i = 0; i < 12; i++){
        scorecard.roll(10);
      }
      expect(scorecard.score()).toEqual(300);
    });
  });

  describe('a finished game', () => {
    it('should have a final score of 300', () => {
      scorecard = new Scorecard();
      for(var i = 0; i < 15; i++){
        scorecard.roll(10);
      }
      expect(scorecard.score()).toEqual(300);
    });
  });
});
