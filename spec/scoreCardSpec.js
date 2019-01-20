describe('ScoreCard', function(){
  describe('Feature - Gutter Game', function(){

    var scorecard;
    var frame;

    beforeEach( () => {
      scorecard = new ScoreCard();
      frame = jasmine.createSpy('frame')
    });

    it('Starts with 0 frames', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Starts with 0 score', function(){
      expect(scorecard.score).toEqual(0);
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

    it('Tells player which frame they are on', function(){
      scorecard.addFrame(frame)
      scorecard.addFrame(frame)
      scorecard.addFrame(frame)
      expect(scorecard.frameNumber()).toEqual(3);
    });

    it('Limits game to 10 frames', function(){
      for (var i = 0; i < 10; i++) {
        scorecard.addFrame(frame);
      };
      expect(scorecard.addFrame(frame)).toThrow(new Error('This game already has 10 frames'));
    });

    it('Game is incomplete', function(){
      scorecard.addFrame(frame);
      expect(scorecard.isComplete()).toEqual(false);
    });

    it('Game is completed ', function(){
      for (var i = 0; i < 10; i++) {
        scorecard.addFrame(frame);
      };
      expect(scorecard.isComplete()).toEqual(true);
    });

    it('Returns the total score for the Game', function(){
      expect(scorecard.totalScore()).toEqual(0);
    });

  })
})