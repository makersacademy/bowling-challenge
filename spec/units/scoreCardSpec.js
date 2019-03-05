describe('ScoreCard', function(){

    var scorecard;
    var frame;
    var frameStrike;
    var frameAverage;

    beforeEach( () => {
      scorecard = new ScoreCard();
      frame = jasmine.createSpy('frame');
      frameStrike = new Frame([10]);
      frameAverage = new Frame([5, 2]);

    });

    it('Starts with 0 frames', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Starts with 0 score', function(){
      expect(scorecard.score).toEqual(0);
    });

    it('Adds a frame to the game', function(){
      scorecard.addFrame([5, 2])
      expect(scorecard.frames).toContain([5, 2]);
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
      
      expect(function() { for (var i = 0; i < 12; i++) {
        scorecard.addFrame(frame);
      }; }).toThrow('This game already has 10 frames');
    });

    it('Game is incomplete', function(){
      scorecard.addFrame(frame);
      expect(scorecard.isComplete()).toEqual(false);
    });
})