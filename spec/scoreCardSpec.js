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

    it('Limits game to 10 frames', function(){
      for (var i = 0; i < 10; i++) {
        scorecard.addFrame(frame);
      };
      expect(scorecard.addFrame(frame)).toThrowError('This game already has 10 frames');
    });

    it('Returns a total score of 0', function(){
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('Game is fully completed', function(){
      expect(scorecard.isComplete()).toEqual(true);
    });
  })
})