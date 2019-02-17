// If the player rolls a strike or spare in the 10th frame
// they can roll the additional balls for the bonus.
// But they can never roll more than 3 balls in the 10th
// frame. The additional rolls only count for the bonus
// not for the regular frame count.
//
//     10, 10, 10 in the 10th frame gives 30 points (10
//       points for the regular first strike and 20
//       points for the bonus).
//     1, 9, 10 in the 10th frame gives 20 points (10
//       points for the regular spare and 10 points
//       for the bonus).

describe('Tenth Frame', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
        game = scoreCard._game
    });

    describe('#IsTenthFrame', function() {
        it('tells whether it is the last frame', function() {
            expect(scoreCard.allFrames()[8].IsTenthFrame()).toBe(false)
            expect(scoreCard.allFrames()[9].IsTenthFrame()).toBe(true)
        });
    });

    it('Tenth frame becomes 3 _numberOfRolls if a strike happens', function() {
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(2)
        gameUpToStrikeOnTenthFrame = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10]
        game.run(gameUpToStrikeOnTenthFrame)
        expect(scoreCard.allFrames()[9]._numberOfRolls).toEqual(3)
    });

});
