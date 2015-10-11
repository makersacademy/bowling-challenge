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

    it('moves to next frame after two rolls if not strike', function() {
      scorecard.rollScore(2);
      scorecard.rollScore(3);
      expect(scorecard.currentFrame).toEqual(2);
    });

    it('has a maximum of 10 frames', function() {
      scorecard.currentFrame = 10;
      expect(function(){scorecard.nextFrame();}).toThrow(new Error('End of game'));
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
      scorecard.rollScore(4);
      expect(scorecard.score[1]).toEqual([5, 4]);
    });

    it('returns total score for a frame', function() {
      scorecard.rollScore(5);
      scorecard.rollScore(4);
      expect(scorecard.frameTotal(1)).toEqual(9);
    });

    it('moves to next frame after a strike', function() {
      scorecard.rollScore(10);
      expect(scorecard.currentFrame).toEqual(2);
    });

    it('adds a bonus of next two roll scores if strike', function() {
      scorecard.rollScore(10);
      scorecard.rollScore(3);
      scorecard.rollScore(4);
      scorecard.strikeBonus();
      expect(scorecard.frameTotal(1)).toEqual(17);
    });

    it('adds a bonus of next roll score if spare', function() {
      scorecard.rollScore(4);
      scorecard.rollScore(6);
      scorecard.rollScore(3);
      scorecard.spareBonus();
      expect(scorecard.frameTotal(1)).toEqual(13);
    });

    it('resets pins to 10 in a new frame', function() {
      scorecard.rollScore(6);
      scorecard.rollScore(3);
      expect(scorecard.pins).toEqual(10);
    });

    it('decreases the number of pins after each roll', function() {
      scorecard.rollScore(6);
      expect(scorecard.pins).toEqual(4);
    });

    it('gives an additional roll and correct score in the 10th frame for a strike', function() {
      scorecard.currentFrame = 10;
      scorecard.rollScore(10);
      scorecard.rollScore(3);
      scorecard.rollScore(1);
      expect(scorecard.frameTotal(10)).toEqual(14);
    });

    it('gives an additional roll and correct score in the 10th frame for a spare', function() {
      scorecard.currentFrame = 10;
      scorecard.rollScore(4);
      scorecard.rollScore(6);
      scorecard.rollScore(3);
      expect(scorecard.frameTotal(10)).toEqual(13);
    });

    it('is on roll 3 after two rolls of frame 10', function() {
      scorecard.currentFrame = 10;
      scorecard.rollScore(10);
      scorecard.rollScore(4);
      expect(scorecard.roll).toEqual(3);
    });

    // it('returns the total score for the whole game', function() {
    //
    // });
});
