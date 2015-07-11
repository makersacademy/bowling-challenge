describe('BowlingScoreCard', function() {
  var bowlingScoreCard;

  beforeEach(function() {
    bowlingScoreCard = new BowlingScoreCard();
  });

  describe('setup', function() {

    it('has 10 frames', function() {
      expect(bowlingScoreCard.allFrames.length).toEqual(10);
    });

    it('has two rolls per frame', function() {
      for (var i=0; i < bowlingScoreCard.allFrames.length; i++) {
        expect(bowlingScoreCard.allFrames[i].length).toEqual(2);
      }
    });

    it('starts with a total score of 0', function() {
      expect(bowlingScoreCard.totalScore).toEqual(0);
    });
  });

  describe('logging results of rolls', function() {

    it('can track rolls', function() {
      expect(bowlingScoreCard.roll(6)).toEqual(6)
    });

    it('knows the current frame', function() {
      bowlingScoreCard.roll(6);
      bowlingScoreCard.roll(2);
      expect(bowlingScoreCard.getCurrentFrame()).toEqual(1)
    });

    it('knows the current roll', function() {
      bowlingScoreCard.roll(6);
      expect(bowlingScoreCard.getCurrentRoll()).toEqual([6, null])
    });

    it('moves to the next frame when a stike has been hit', function() {
      bowlingScoreCard.roll(10);
      expect(bowlingScoreCard.getCurrentFrame()).toEqual(1)
    });

  });

});
