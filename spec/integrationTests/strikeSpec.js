
  // The player has a strike if he knocks down all 10 pins
  // with the first roll in a frame. The frame ends immediately
  // (since there are no pins left for a second roll). The
  // bonus for that frame is the number of pins knocked down
  // by the next two rolls. That would be the next frame,
  // unless the player rolls another strike.
describe('ScoreCard', function() {

    var scoreCard;

    beforeEach(function() {
      scoreCard = new ScoreCard();
      game = scoreCard._game;
    });

    describe('#calculateStrikeBonuses', function() {


    it('Frames keep track of the next two roll scores', function() {
      do_one_game_with_strikes(scoreCard._game)
      scoreCard.calculateStrikeBonuses()
      firstFrameExpectation = [3, 4]
      expect(scoreCard._game._frames[0]._strikeBonusRollsScores).toEqual(firstFrameExpectation)
      seventhFrameExpectation = [10, 2]
      expect(scoreCard._game._frames[6]._strikeBonusRollsScores).toEqual(seventhFrameExpectation)
      eighthFrameExpectation = [2, 3]
      expect(scoreCard._game._frames[7]._strikeBonusRollsScores).toEqual(eighthFrameExpectation)
      ninthFrameExpectation = []
      expect(scoreCard._game._frames[8]._strikeBonusRollsScores).toEqual(ninthFrameExpectation)
    });

  });

});
