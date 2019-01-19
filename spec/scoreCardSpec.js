describe('ScoreCard', function(){
  describe('Feature - Gutter Game', function(){

    beforeEach( () => {
      scorecard = new ScoreCard();
      frame1 = new Frame();
    });

    it('Starts with 0 frames', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Adds a frame to the game', function(){
      scorecard.addFrame(frame1)
      expect(scorecard.frames).toContain(frame1);
    });

    it('Returns a total score of 0', function(){
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('Game is fully completed', function(){
      expect(scorecard.isComplete()).toEqual(true);
    });
  })
})