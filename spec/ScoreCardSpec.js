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

    it('has a maximum of 10 frames', function() {
      scorecard.currentFrame = 10;
      expect(scorecard.nextFrame()).toEqual("End of game");
    });

    it('begins game on roll 1', function () {
      expect(scorecard.roll).toEqual(1);
    });

    it('can move to the next roll', function () {
      scorecard.nextRoll();
      expect(scorecard.roll).toEqual(2);
    });

    it('can store a score for each roll', function() {
      scorecard.rollScore(5);
      expect(scorecard.score[1]).toEqual([5]);
    });

});
