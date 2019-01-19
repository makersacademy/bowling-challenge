describe('ScoreCard', function(){
  describe('Feature - Gutter Game', function(){

    var scorecard;
    var frame;

    beforeEach( () => {
      scorecard = new ScoreCard();
      frame = new Frame();
    });

    it('Starts with 0 frames', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Adds a frame to the game', function(){
      scorecard.addFrame(frame)
      expect(scorecard.frames).toContain(frame);
    });

    it('Adds multiple frames to the game', function(){
      scorecard.addFrame(frame)
      scorecard.addFrame(frame)
      scorecard.addFrame(frame)
      expect(scorecard.frames).toEqual([frame, frame, frame]);
    });

    it('Returns a total score of 0', function(){
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('Game is fully completed', function(){
      expect(scorecard.isComplete()).toEqual(true);
    });
  })
})