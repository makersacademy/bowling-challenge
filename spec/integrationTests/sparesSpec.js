
// The player has a spare if the knocks down all
// 10 pins with the two rolls of a frame. The
// bonus for that frame is the number of pins
// knocked down by the next roll (first roll of
// next frame).
describe('Spares', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
        game = scoreCard._game;
    });

    describe('ScoreCard#calculateSpareBonuses', function() {

        it('ScoreCard correctly calculates the spare bonuses when there are no spares', function() {
            doOneGameWithoutStrikesOrSpares(game);
            scoreCard.calculateSpareBonuses();
            var i;
            for (i = 0; i < 10; i++) {
                expect(scoreCard.allFrames()[i]._spareBonusRollsScore).toEqual(0);
            }
        });

        it('ScoreCard correctly calculates the spare bonuses when there are indeed spares', function() {
          game.run(
            [1, 9,
            2, 8,
            1, 1,
            5, 5,
            1, 1,
            0, 10,
            0, 8,
            5, 5,
            0, 0,
            1, 1]
          );
          scoreCard.calculateSpareBonuses();
          expect(game.frames[0]._spareBonusRollsScore).toEqual(2);
          expect(game.frames[1]._spareBonusRollsScore).toEqual(1);
          expect(game.frames[2]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[3]._spareBonusRollsScore).toEqual(1);
          expect(game.frames[4]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[5]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[6]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[7]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[8]._spareBonusRollsScore).toEqual(0);
          expect(game.frames[9]._spareBonusRollsScore).toEqual(0);
        });

    });

    it('Returns the correct overall game score for a game with strikes.', function() {
        doOneGameWithStrikes(game);
        expect(scoreCard.total()).toEqual(10+3+4+5+1+2+3+4+5+1+2+10+10+2+3+4+5+7+12+5);
    });

});
