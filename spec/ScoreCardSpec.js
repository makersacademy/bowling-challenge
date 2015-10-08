describe('ScoreCard', function() {
    var scorecard;

    beforeEach(function() {
      scorecard = new ScoreCard();
    });

    it('starts each frame with 10 pins', function () {
      expect(scorecard.pins).toEqual(10);
    });

    it('begins game on frame 1', function () {
      expect(scorecard.currentFrame).toEqual(1);
    });

    it('can move to next frame', function() {
      scorecard.nextFrame();
      expect(scorecard.currentFrame).toEqual(2);
    });

    
});
