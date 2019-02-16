
  // The player has a strike if he knocks down all 10 pins
  // with the first roll in a frame. The frame ends immediately
  // (since there are no pins left for a second roll). The
  // bonus for that frame is the number of pins knocked down
  // by the next two rolls. That would be the next frame,
  // unless the player rolls another strike.
describe('Strikes', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
        game = scoreCard._game;
    });

    describe('ScoreCard#calculateStrikeBonuses', function() {

        it('Frames keep track of the next two roll scores', function() {
            doOneGameWithStrikes(game)
            scoreCard.calculateStrikeBonuses()
            firstFrameExpectation = [3, 4]
            expect(game.frames[0]._strikeBonusRollsScores).toEqual(firstFrameExpectation)
            seventhFrameExpectation = [10, 2]
            expect(game.frames[6]._strikeBonusRollsScores).toEqual(seventhFrameExpectation)
            eighthFrameExpectation = [2, 3]
            expect(game.frames[7]._strikeBonusRollsScores).toEqual(eighthFrameExpectation)
            ninthFrameExpectation = []
            expect(game.frames[8]._strikeBonusRollsScores).toEqual(ninthFrameExpectation)
        });

        it('ScoreCard correctly calculates the strike bonuses when there are no strikes', function() {
            doOneGameWithoutStrikesOrSpares(game)
            scoreCard.calculateStrikeBonuses()
            var i;
            for (i = 0; i < 10; i++) {
              expect(scoreCard.allFrames()[i].sumStrikeBonusRollsScores()).toEqual(0)
            };
        });

        it('ScoreCard correctly calculates the strike bonuses when there are indeed strikes', function() {
            doOneGameWithStrikes(game)
            scoreCard.calculateStrikeBonuses()
            var i;
            for (i = 0; i < 10; i++) {
              console.log(scoreCard.allFrames()[i]._strikeBonusRollsScores)
            };
            expect(game.frames[0].sumStrikeBonusRollsScores()).toEqual(7)
            expect(game.frames[1].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[2].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[3].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[4].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[5].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[6].sumStrikeBonusRollsScores()).toEqual(12)
            expect(game.frames[7].sumStrikeBonusRollsScores()).toEqual(5)
            expect(game.frames[8].sumStrikeBonusRollsScores()).toEqual(0)
            expect(game.frames[9].sumStrikeBonusRollsScores()).toEqual(0)
        });

    });

});
